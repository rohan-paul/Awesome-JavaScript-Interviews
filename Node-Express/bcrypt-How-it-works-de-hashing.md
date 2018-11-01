## Fist, What is password hashing - its the below kind of transforming.

hash("hello") = 2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824
hash("hbllo") = 58756879c05c68dfac9866712fad6a93f8146f337a69afe7dd238f3364946366
hash("waltz") = c0e81794384491161f1777c232bc6bd9ec38f616560b120fda8e90f383853542

Hash algorithms are one way functions. They turn any amount of data into a fixed-length "fingerprint" that cannot be reversed. They also have the property that if the input changes by even a tiny bit, the resulting hash is completely different (see the example above). This is great for protecting passwords, because we want to store passwords in a form that protects them even if the password file itself is compromised, but at the same time, we need to be able to verify that a user's password is correct.

The general workflow for account registration and authentication in a hash-based account system is as follows:

1> The user creates an account.

2> Their password is hashed and stored in the database. At no point is the plain-text (unencrypted) password ever written to the hard drive.

3> When the user attempts to login, the hash of the password they entered is checked against the hash of their real password (retrieved from the database).

4> If the hashes match, the user is granted access. If not, the user is told they entered invalid login credentials.

5> Steps 3 and 4 repeat every time someone tries to login to their account.

### bcrypt works in 2 steps, first genSalt and then hash the password with that salt

### The regular steps are >> Generate the salt first (if err throw err else give me the salt)

### and then hash the password with the generated salt (passing a cb so if there's error throw error else give me the hash).

So from [official doc](https://github.com/dcodeIO/bcrypt.js#usage---async) the below function is for the first step of **generating the salt and hashing**

```js
var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("B4c0//", salt);

// And to hash a password the ES6 Async way is combine them both without blocking any other operation

bcrypt.genSalt(10, function(err, salt) {
  bcrypt.hash("B4c0//", salt, function(err, hash) {
    // Store hash in your password DB.
  });
});
```

Bcrypt allows us to choose the value of saltRounds, which gives us control over the cost of processing the data. The higher this number is, the longer it takes for the machine to calculate the hash associated with the password. It is important when choosing this value, to select a number high enough that someone who tries to find the password for a user by brute force, requires so much time to generate all the possible hash of passwords that does not compensate him. And on the other hand, it must be small enough so as not to end the user’s patience when registering and logging in (this patience is not usually very high). By default, the saltRounds value is 10.

### One example of the first step of generating the salt and hashing - [https://github.com/rohan-paul/Tiny-Twitter-Clone/blob/master/models/user.js](https://github.com/rohan-paul/Tiny-Twitter-Clone/blob/master/models/user.js)

```js
UserSchema.pre("save", function(next) {
  let user = this; // This is how I access UserSchema object

  // I shall only hash the password if it has been modified (or is new). So, in below line I make sure if there was already a password and isModified in not true, then move-on with next()
  if (!user.isModified("password")) return next();

  // and for new password
  if (user.password) {
    bcrypt.genSalt(10, function(err, salt) {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, null, function(err, hash) {
        if (err) return next(err);
        user.password = hash;
        next(err);
      });
    });
  }
});
```

Explanation of `UserSchmea.pre` in above - Its the middleware - also known as “pre” and “post” hooks that tie particular functions to particular lifecycle and query events. This middleware is defined on the schema level and can modify the query or the document itself as it is executed. Middleware is invoked with two arguments: the event trigger (as a string) and the callback function that is triggered for that particular event. The callback itself takes in an argument of a function, which we typically call next , and when invoked — advances the document/query to the next awaiting middleware.
So what the below function does is - before (i.e. pre) user saves the normal text password into the database, making sure it encrypts it first

### Example from my [dev-book app - https://github.com/rohan-paul/Developer-Profile-App/blob/master/routes/api/users.js](https://github.com/rohan-paul/Developer-Profile-App/blob/master/routes/api/users.js)

### First hashing and then save the hashed password into mongo

```js
// and then get other details of the new user from the post request
const newUser = new User({
  name: req.body.name,
  email: req.body.email,
  avatar,
  password: req.body.password
});

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(newUser.password, salt, (err, hash) => {
    if (err) throw err;
    newUser.password = hash;
    newUser
      .save()
      .then(user => res.json(user))
      .catch(user => console.log(err));
  });
});
```

### Next step before signing-in a new user, it compares the password with that saved in the database

Example [https://github.com/rohan-paul/Developer-Profile-App/blob/master/routes/api/users.js](https://github.com/rohan-paul/Developer-Profile-App/blob/master/routes/api/users.js)

```js
router.post("/login", (req, res) => {
  /* I pass the data to the validateRegisterInput() function. The data (i.e. req.body) includes
    all the information that the user puts in while registering.
    And get the function's return values assigned to const { errors, isValid }. */
  const { errors, isValid } = validateLoginInput(req.body);
  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  //Check if the user email exists at all in database
  User.findOne({ email }).then(user => {
    if (!user) {
      errors.email = "User not found";
      return res.status(404).json({ email: "User not found" });
    }

    // Compare password hash saved in database with the password provided in the req.body
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // if User is matched, then create JWT Payload
        const payload = { id: user.id, name: user.name, avatar: user.avatar };

        // signed JWT token to be sent to server
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        errors.password = "Password Incorrect";
        return res.status(400).json(errors);
      }
    });
  });
});
```

### Authentication at the time of signing in a user

[https://solidgeargroup.com/hashing-passwords-nodejs-mongodb-bcrypt](https://solidgeargroup.com/hashing-passwords-nodejs-mongodb-bcrypt)

The salt is incorporated into the hash (as plaintext). The compare function simply pulls the salt out of the hash and then uses it to hash the password and perform the comparison.
When a user logs into our system, we need to check that the password entered is correct. Unlike other systems that would decrypt the password in the database (if it is encrypted), and compare it with the one entered by the user, what we do with bcrypt is encrypt the one entered by the user. To do this, we will pass the password to bcrypt to calculate the hash, but also the password stored in the database associated with the user (hash). This is because, as mentioned before, the bcrypt algorithm used a random segment (salt) to generate the hash associated with the pasword. This was stored along with the password, and you need it to recalculate the hash of the password entered by the user and finally compare with the one entered when registering and see if they match.

Looking at the [source code of bcrypt.compare](https://github.com/dcodeIO/bcrypt.js/blob/b09f7f266a7015456b7b36deeb026dc636f64542/dist/bcrypt.js#L269) function makes the above steps clear

```js
bcrypt.compare = function(s, hash, callback, progressCallback) {
  function _async(callback) {
    if (typeof s !== "string" || typeof hash !== "string") {
      nextTick(
        callback.bind(
          this,
          Error("Illegal arguments: " + typeof s + ", " + typeof hash)
        )
      );
      return;
    }
    if (hash.length !== 60) {
      nextTick(callback.bind(this, null, false));
      return;
    }
    bcrypt.hash(
      s,
      hash.substr(0, 29),
      function(err, comp) {
        if (err) callback(err);
        else callback(null, safeStringCompare(comp, hash));
      },
      progressCallback
    );
  }

  if (callback) {
    if (typeof callback !== "function")
      throw Error("Illegal callback: " + typeof callback);
    _async(callback);
  } else
    return new Promise(function(resolve, reject) {
      _async(function(err, res) {
        if (err) {
          reject(err);
          return;
        }
        resolve(res);
      });
    });
};
```

### Online bcrypt hashing and de-hashing generator and checker

[https://bcrypt-generator.com/](https://bcrypt-generator.com/)

Just put the rounds (which is the salt length to generate, i.e. the function where I am hashing the plain-text password )

`bcrypt.hashSync(plainTextPassword, 10)` So the number 10 is the rounds in the above online tool

After hashing a plaintext password, for checking I will just put the hashed password from the mongo database - i.e. after running terminal command something like `db.users.find()` which will give all the users saved in the mongo database.

So an example is this hashed password - `$2a$10$m0mq4PYOOvm74Gukml4FN.T0Ntobhzi42T6b5v1WIsJ5aZkVzJz3a` And then put the round as 10 and I will get `123` which was my plaintext password in this case.
