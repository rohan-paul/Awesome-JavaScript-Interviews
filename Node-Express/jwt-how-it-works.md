
### A JSON Web Token(JWT), defines an explicit, compact, and self-containing secured protocol for transmitting restricted informations. This is often used to send information that can be verified and trusted by means of a digital signature.

The JWT Claims Set represents a compact URL-safe JSON object, that is base64url encoded and digitally signed and/or encrypted. The JSON object consists of zero or more name/value pairs (or members), where the names are strings and the values are arbitrary JSON values. These members are the claims represented by the JWT.

**It is  Stateless**: All the information needed to complete a particular request is sent along with it, including an Authorization HTTP header which contains our JWT which serves as an ‘identity object.’ Since the payload contains all the required information for us to authenticate the user, we can avoid making repeated calls to our database.

**JSON Web Token is NOT Encrypted**: As demonstrated in the previous steps, the data inside a JWT is encoded and signed, not encrypted. The purpose of encoding data is to transform the data’s structure. Signing data allows the data receiver to verify the authenticity of the source of the data. So encoding and signing data does NOT secure the data. On the other hand, the main purpose of encryption is to secure the data and to prevent unauthorized access. While a JWT’s signature prevents malicious parties from tampering with it, the token’s header is only Base64 encoded. When dealing with confidential identifiers in your tokens, you should encrypt your tokens using AES.

JWT are "signed" and therefore its contents are protected from tampering: you cannot change its contents without invalidating them.

You can optionally "encrypt" the contents and therefore turn them visible only to issuer (the entity creating the token) and the consumer (the entity that is destined to use its contents after verification).

**To encrypt** a JWT for a given recipient you need to know their public RSA key. Decryption happens with the private RSA key, which the recipient must keep secure at all times.


1> Basic steps of token flow in JWT

https://blog.jscrambler.com/implementing-jwt-using-passport/

A> Client makes a request once by sending their login credentials and password

### B> When the user logs in, the backend creates a signed token and returns it in response. That is, Server validates the credentials and, if everything is right, it returns to the client a JSON with a token that encodes data from a user logged into the system;

### C> Client, after receiving this token, can store it the way it wants, whether via LocalStorage, Cookie or other client-side storage mechanisms;
Every time the client accesses a route that requires authentication, it will only send this token to the API to authenticate and release consumption data;

D> Server always validate this token to allow or block a client request.

2> https://medium.com/vandium-software/5-easy-steps-to-understanding-json-web-tokens-jwt-1164c0adfcec - GREAT article

The typical entities are the user, the application server, and the authentication server. The authentication server will provide the JWT to the user.

In this example, the user first signs into the authentication server using the authentication server’s login system (e.g. username and password, Facebook login, Google login, etc).

### But instead of saving the user data, the authentication server, then creates the JWT and sends it to the user.

When the user makes API calls to the application, the user passes the JWT along with the API call. In this setup, the application server would be configured to verify that the incoming JWT are created by the authentication server. So, the application can use the attached JWT to verify that the API call is coming from an authenticated user.

### 2> method signature - jwt.sign(payload, secretOrPrivateKey, [options, callback])

payload - this will include some user info, because this token is gonna decode in the server and the server needs to know what user it is. The payload component of the JWT is the data that‘s stored inside the JWT (this data is also referred to as the “claims” of the JWT).

secretOrPrivateKey - secretOrPrivateKey is a string, buffer, or object containing either the secret for HMAC algorithms or the PEM encoded private key for RSA and ECDSA. In case of a private key with passphrase an object { key, passphrase } can be used (based on crypto documentation), in this case be sure you pass the algorithm option.

3> https://github.com/dwyl/learn-json-web-tokens

What does a JWT Look Like?
Tokens are a string of "url safe" characters which encode information. Tokens have three components (separated by periods) (shown here on multiple lines for readability but used as a single string of text)

eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9           // header
.eyJrZXkiOiJ2YWwiLCJpYXQiOjE0MjI2MDU0NDV9      // payload
.eUiabuiKv-8PYk2AkGY4Fb5KMZeorYBLw261JPQD5lM   // signature


### 1. Header
The first part of a JWT is an encoded string representation of a simple JavaScript object which describes the token along with the hashing algorithm used. Basically contains information about how the JWT signature should be computed. The header is a JSON object in the following format:

{
    "typ": "JWT",
    "alg": "HS256"
}

### 2. Payload
The second part of the JWT forms the core of the token. Payload length is proportional to the amount of data you store in the JWT. General rule of thumb is: store the bare minimum in the JWT.

### 3. Signature
The third, and final, part of the JWT is a signature generated based on the header (part one) and the body (part two) and will be used to verify that the JWT is valid.

The signature is computed using the following pseudo code (https://medium.com/vandium-software/5-easy-steps-to-understanding-json-web-tokens-jwt-1164c0adfcec) :

```js
data = base64urlEncode( header ) + “.” + base64urlEncode( payload )
signature = Hash( data, secret );
```

What this algorithm does is base64url encodes the header and the payload created in steps 1 and 2. The algorithm then joins the resulting encoded strings together with a period (.) in between them. In our pseudo code, this joined string is assigned to data. To get the JWT signature, the data string is hashed with the secret key using the hashing algorithm specified in the JWT header.

Remembering the header.payload.signature structure of the JWT, we simply need to combine the components, with periods (.) separating them.


## 4> generate the JWT

```js
function generateToken(req){
  var token = jwt.sign({
    auth:  'magic',
    agent: req.headers['user-agent'],
    exp:   Math.floor(new Date().getTime()/1000) + 7*24*60*60; // Note: in seconds!
  }, secret);  // secret is defined in the environment variable JWT_SECRET
  return token;
}
```

# 5> How does JWT protect our data?

It is important to understand that the purpose of using JWT is NOT to hide or obscure data in any way. The reason why JWT are used is to prove that the sent data was actually created by an authentic source.

## As demonstrated in the previous steps, the data inside a JWT is encoded and signed, not encrypted. The purpose of encoding data is to transform the data’s structure. Signing data allows the data receiver to verify the authenticity of the source of the data. So encoding and signing data does NOT secure the data.

# Extracting the JWT from the request

1> https://github.com/themikenicholson/passport-jwt#extracting-the-jwt-from-the-request

There are a number of ways the JWT may be included in a request. In order to remain as flexible as possible the JWT is parsed from the request by a user-supplied callback passed in as the jwtFromRequest parameter. This callback, from now on referred to as an extractor, accepts a request object as an argument and returns the encoded JWT string or null.

A number of extractor factory functions are provided in passport-jwt.ExtractJwt. These factory functions return a new extractor configured with the given parameters. fromAuthHeaderAsBearerToken() is one suct function that I am using here, as my scheme here was ‘bearer’ as stated in my user.js routes file.

fromAuthHeaderAsBearerToken() creates a new extractor that looks for the JWT in the authorization header with the scheme 'bearer'

#### Some good resources on this topic

 - https://medium.com/vandium-software/5-easy-steps-to-understanding-json-web-tokens-jwt-1164c0adfcec



