When I dont have the front-end built, and I want to check the authentication routes by loggin in a user from Postman

-   A. I have to generate a salted pasword >to save in Mon
-   B. Save that salted and encrypted PW in Mongo
-   C. Use the string password in Postmat to login

#### The general flow of the authentication process with token

When the user makes login request

1. The server verifies if the user is legit and responds with a token (JWT) containing the identity of the user.
2. The token in response is stored locally in the client system (localStorage in this case), and the user is allowed inside the application.
3. When the user makes changes to his profile (or any other resources), his profile [data + token] is sent to the server.
4. The server first checks if the request contains the token (responds with an error if not passed). The token is then verified, once done then the profile data from the payload is checked and respective changes are made to the database.
5. Its same for all the other actions made by the user.
6. When the user “logs out” the identification token is destroyed from the localStorage.

1> First - To check the /login route in Postman (when I dont have the sign-up module yet), first I generate an hash password for 'abc' by running the below code in a standalone .js file located in /server directory. Only purpose of this file is to generate a hash to be saved in step-2 to Mongodb

```js
const bcrypt = require("bcrypt");

const myPlaintextPassword = "abc";
bcrypt.genSalt(10, function(err, salt) {
	bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
		console.log(hash);
	});
});
```

The console-logged 'hash' value is the one, that I have to save in Mongo

2> Second, I manually inserted an user, into mongodb 'users' collection with the below details

```js
db.users.insert({
	email: "rohanpaul2@gmail.com",
	password: "$2b$10$xL6RRh9/WHI5Jlartab32.7ED.y3aOSLQ9teprLD.VBe9hgqaYN.W",
	firstName: "rohan",
	lastName: "paul"
});
```

3> Third - Then from postman I send a POST request to < http://localhost:3000/api/auth/login >

{
"email": "rohanpaul2@gmail.com",
"password":"abc"
}
