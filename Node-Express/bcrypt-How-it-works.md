### How bcrypt works

### bcrypt works in 2 steps, first genSalt and then hash the password with that salt

The regular steps are >> Generate the salt first (if err throw err else give me the salt)

and then hash the password with the generated salt (passing a cb so if there's error throw error else give me the hash).

So from [official doc](https://github.com/dcodeIO/bcrypt.js#usage---async) the below are the steps

```js
var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("B4c0/\/", salt);

// And to hash a password the ES6 Async way is combine them both without blocking any othere operation

    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash("B4c0/\/", salt, function(err, hash) {
        // Store hash in your password DB.
    });
});
```
Bcrypt allows us to choose the value of saltRounds, which gives us control over the cost of processing the data. The higher this number is, the longer it takes for the machine to calculate the hash associated with the password. It is important when choosing this value, to select a number high enough that someone who tries to find the password for a user by brute force, requires so much time to generate all the possible hash of passwords that does not compensate him. And on the other hand, it must be small enough so as not to end the user’s patience when registering and logging in (this patience is not usually very high). By default, the saltRounds value is 10.

One example of generation salt
[https://github.com/rohan-paul/Tiny-Twitter-Clone/blob/master/models/user.js](https://github.com/rohan-paul/Tiny-Twitter-Clone/blob/master/models/user.js)

```js
UserSchema.pre('save', function(next) {
  let user = this; // This is how I access UserSchema object

  // I shall only hash the password if it has been modified (or is new). So, in below line I make sure if there was already a password and isModified in not true, then move-on with next()
  if(!user.isModified('password')) return next();

  // and for new password
  if(user.password) {
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

Explanation of ``UserSchmea.pre`` in above - Its the middleware - also known as “pre” and “post” hooks that tie particular functions to particular lifecycle and query events. This middleware is defined on the schema level and can modify the query or the document itself as it is executed. Middleware is invoked with two arguments: the event trigger (as a string) and the callback function that is triggered for that particular event. The callback itself takes in an argument of a function, which we typically call next , and when invoked — advances the document/query to the next awaiting middleware.
So what the below function does is - before (i.e. pre) user saves the normal text password into the database, making sure it encrypts it first

### Next step before signing-in a new user, it compares the password with that saved in the database

Example [https://github.com/rohan-paul/Developer-Profile-App/blob/master/routes/api/users.js](https://github.com/rohan-paul/Developer-Profile-App/blob/master/routes/api/users.js)

```js
router.post('/login', (req, res) => {

    /* I pass the data to the validateRegisterInput() function. The data (i.e. req.body) includes
    all the information that the user puts in while registering.
    And get the function's return values assigned to const { errors, isValid }. */
    const { errors, isValid } = validateLoginInput(req.body);
    // Check Validation
    if(!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    //Check if the user email exists at all in database
    User.findOne({ email }).then(user => {
        if (!user) {
            errors.email = 'User not found';
            return res.status(404).json({email: 'User not found'});
        }

        // Compare password hash saved in database with the password provided in the req.body
        bcrypt.compare(password, user.password).then(isMatch => {
            if(isMatch) {

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
                        token: 'Bearer ' + token
                      });
                    }
                  );
                } else {
                errors.password = 'Password Incorrect';
                return res.status(400).json(errors);
            }
        });
    });
});

```


