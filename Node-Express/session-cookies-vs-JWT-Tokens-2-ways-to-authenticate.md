### Cookie-Based Authentication

Cookie-based authentication has been the default, tried-and-true method for handling user authentication for a long time.

#### Cookie-based authentication is **stateful**. This means that an authentication record or session must be kept both server and client-side. The server needs to keep track of active sessions in a database, while on the front-end a cookie is created that holds a session identifier, thus the name cookie based authentication. Let's look at the flow of traditional cookie-based authentication:

User enters their login credentials.
Server verifies the credentials are correct and creates a session which is then stored in a database.
A cookie with the session ID is placed in the users browser.
On subsequent requests, the session ID is verified against the database and if valid the request processed.
Once a user logs out of the app, the session is destroyed both client-side and server-side.

###Token-Based Authentication

Token-based authentication has gained prevalence over the last few years due to the rise of single page applications, web APIs, and the Internet of Things (IoT). When we talk about authentication with tokens, we generally talk about authentication with JSON Web Tokens (JWTs). While there are different ways to implement tokens, JWTs have become the de-facto standard. With this context in mind, the rest of the article will use tokens and JWTs interchangeably.

#### Token-based authentication is **stateless**. The server does not keep a record of which users are logged in or which JWTs have been issued. Instead, every request to the server is accompanied by a token which the server uses to verify the authenticity of the request. The token is generally sent as an addition Authorization header in the form of Bearer {JWT}, but can additionally be sent in the body of a POST request or even as a query parameter. Let's see how this flow works:

- User enters their login credentials.
- Server verifies the credentials are correct and generates and returns a signed token.
- This token is stored client-side, most commonly in local storage - but can be stored in session storage or a cookie as well.
- Subsequent requests to the server include this token as an additional Authorization header or through one of the other methods mentioned above.
- The server decodes the JWT and if the token is valid processes the request.
- Once a user logs out, the token is destroyed client-side, no interaction with the server is necessary.

### Advantages of Token-Based Authentication

Understanding how something works is only half the battle. Next, we'll cover the reasons why token authentication is preferable over the traditional cookie-based approach.

### Stateless, Scalable, and Decoupled

Perhaps the biggest advantage to using tokens over cookies is the fact that token authentication is stateless. The back-end does not need to keep a record of tokens. Each token is self-contained, containing all the data required to check it's validity as well as convey user information through claims.

The server's only job, then, becomes to sign tokens on a successful login request and verify that incoming tokens are valid. In fact, the server does not even need to sign tokens. Third party services such as Auth0 can handle the issuing of tokens and then the server only needs to verify the validity of the token.

### Cross Domain and CORS

Cookies work well with singular domains and sub-domains, but when it comes to managing cookies across different domains, it can get hairy. In contrast, a token-based approach with CORS enabled makes it trivial to expose APIs to different services and domains. Since the JWT is required and checked with each and every call to the back-end, as long as there is a valid token, requests can be processed. There are a few caveats to this and we'll address those in the Common Questions and Concerns section below.

### Store Data in the JWT

With a cookie based approach, you simply store the session id in a cookie. JWT's, on the other hand, allow you to store any type of metadata, as long as it's valid JSON. The JWT spec specifies different types of claims that can be included such as reserved, public and private. You can learn more about the specifics and the differences between the types of claims on the jwt.io website.

In practice, what this means is that a JWT can contain any type of data. Depending on your use case you may choose to make the minimal amount of claims such as the user id and expiration of the token, or you may decide to include additional claims such as the user's email address, who issued the token, scopes or permissions for the user, and more.

### Performance

When using the cookie-based authentication, the back-end has to do a lookup, whether that be a traditional SQL database or a NoSQL alternative, and the round trip is likely to take longer compared to decoding a token. Additionally, since you can store additional data inside the JWT, such as the user's permission level, you can save yourself additional lookup calls to get and process the requested data.

For example, say you had an API resource /api/orders that retrieves the latest orders placed via your app, but only users with the role of admin have access to view this data. In a cookie based approach, once the request is made, you'd have one call to the database to verify that the session is valid, another to get the user data and verify that the user has the role of admin, and finally a third call to get the data. On the other hand, with a JWT approach, you can store the user role in the JWT, so once the request is made and the JWT verified, you can make a single call to the database to retrieve the orders.

### JWT Size

The biggest disadvantage of token authentication is the size of JWTs. A session cookie is relatively tiny compared to even the smallest JWT. Depending on your use case, the size of the token could become problematic if you add many claims to it. Remember, each request to the server must include the JWT along with it.

### Where to Store Tokens?

With token-based auth, you are given the choice of where to store the JWT. Commonly, the JWT is placed in the browser's local storage and this works well for most use cases. There are some issues with storing JWTs in local storage to be aware of. Unlike cookies, local storage is sandboxed to a specific domain and its data cannot be accessed by any other domain including sub-domains. **Because localStorage works on same-origin policy. So, data stored will only be available on the same origin.**

You can store the token in a cookie instead, but the max size of a cookie is only 4kb so that may be problematic if you have many claims attached to the token. Additionally, you can store the token in session storage which is similar to local storage but is cleared as soon as the user closes the browser.

### XSS and XSRF Protection

Protecting your users and servers is always a top priority. One of the most common concerns developers have when deciding on whether to use token-based authentication is the security implications. Two of the most common attack vectors facing websites are Cross Site Scripting (XSS) and Cross-Site Request Forgery (XSRF or CSRF).

Cross Site Scripting) attacks occur when an outside entity is able to execute code within your website or app. The most common attack vector here is if your website allows inputs that are not properly sanitized. If an attacker can execute code on your domain, your JWT tokens are vulnerable.

XSS attacks are much easier to deal with compared to XSRF attacks because they are generally better understood. Many frameworks, including Angular, automatically sanitize inputs and prevent arbitrary code execution. If you are not using a framework that sanitizes input/output out-of-the-box, you can look at plugins like caja developed by Google to assist. Sanitizing inputs is a solved issue in many frameworks and languages and I would recommend using a framework or plugin vs building your own.

#### Cross Site Request Forgery attacks are not an issue if you are using JWT with local storage.

On the other hand, if your use case requires you to store the JWT in a cookie, you will need to protect against XSRF. XSRF are not as easily understood as XSS attacks. Luckily, preventing XSRF attacks is a fairly simple matter. To over-simplify, protecting against an XSRF attack, your server, upon establishing a session with a client will generate a unique token (note this is not a JWT). Then, anytime data is submitted to your server, a hidden input field will contain this token and the server will check to make sure the tokens match. Again, as our recommendation is to store the JWT in local storage, you probably will not have to worry about XSRF attacks.

#### Luckily, preventing XSRF attacks is a fairly simple matter. To over-simplify, protecting against an XSRF attack, your server, upon establishing a session with a client will generate a unique token (note this is not a JWT). Then, anytime data is submitted to your server, a hidden input field will contain this token and the server will check to make sure the tokens match. Again, as our recommendation is to store the JWT in local storage, you probably will not have to worry about XSRF attacks.

### Ways to protect token

1> One of the best ways to protect your users and servers is to have a short expiration time for tokens. That way, even if a token is compromised, it will quickly become useless.

2> Additionally, you may maintain a blacklist of compromised tokens and not allow those tokens access to the system.

3> Finally, the nuclear approach would be to change the signing algorithm, which would invalidate all active tokens and require all of your users to log in again. This approach is not easily recommended, but is available in the event of a severe breach.

### Tokens Are Signed, Not Encrypted

A JSON Web Token is comprised of three parts: the header, payload, and signature. The format of a JWT is header.payload.signature. If we were to sign a JWT with the HMACSHA256 algorithm, the secret 'shhhh' and the payload of:

```
{
"sub": "1234567890",
"name": "Ado Kukic",
"admin": true
}
```

The JWT generated would be:

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFkbyBLdWtpYyIsImFkbWluIjp0cnVlLCJpYXQiOjE0NjQyOTc4ODV9.Y47kJvnHzU9qeJIN48_bVna6O0EDFiMiQ9LpNVDFymM

#### The very important thing to note here is that this token is signed by the HMACSHA256 algorithm, and the header and payload are Base64URL encoded, it is not encrypted. If I go to jwt.io, paste this token and select the HMACSHA256 algorithm, I could decode the token and read its contents. Therefore, it should go without saying that sensitive data, such as passwords, should never be stored in the payload.

#### If you must store sensitive data in the payload or your use case calls for the JWT to be obscured, you can use JSON Web Encryption (JWE). JWE allows you to encrypt the contents of a JWT so that it is not readable by anyone but the server. JOSE provides a great framework and different options for JWE and has SDKs for many popular frameworks including NodeJS and Java.

### Further resources to refer

1> [https://dzone.com/articles/cookies-vs-tokens-the-definitive-guide](https://dzone.com/articles/cookies-vs-tokens-the-definitive-guide)

2>
