## Why use ‘cors’ package, what does it do

A> **[https://medium.com/@alexishevia/using-cors-in-express-cac7e29b005b](https://medium.com/@alexishevia/using-cors-in-express-cac7e29b005b)**

Cross-origin resource sharing (CORS) allows AJAX requests to skip the Same-origin policy and access resources from remote hosts.

[https://www.infoworld.com/article/3173363/application-development/how-to-enable-cors-on-your-web-api.html](https://www.infoworld.com/article/3173363/application-development/how-to-enable-cors-on-your-web-api.html)

**Security restrictions on your browser’s security policy prevent your web browser from making AJAX requests to a server in another domain. This is also known as same-origin policy. In other words, browser security prevents a web page of one domain from executing AJAX calls on another domain.**
**Note that an origin of a request comprises of: Scheme, Host and Port number. So, two requests are considered to be from the same origin if they have the same scheme, host and port number. If any of these differ, the requests are considered to be cross origin, i.e., not belonging to identical origins.**

B> **[https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy)**

The same-origin policy restricts how a document or script loaded from one origin can interact with a resource from another origin. It is a critical security mechanism for isolating potentially malicious documents.
For security reasons, browsers restrict cross-origin HTTP requests initiated from within scripts. For example, XMLHttpRequest and the Fetch API follow the same-origin policy. This means that a web application using those APIs can only request HTTP resources from the same origin the application was loaded from, unless the response from the other origin includes the right CORS headers.

So, in my MERN app for connected dropdown-list, my client app is loading from port-3000 but its request for mLab database, is originating from port-5000 (where my express server is running ).

2> **[https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)** - **GREAT EXPLANATION**

**Cross-Origin Resource Sharing (CORS) is a mechanism that uses additional HTTP headers to tell a browser to let a web application running at one origin (domain) have permission to access selected resources from a server at a different origin. A web application makes a cross-origin HTTP request when it requests a resource that has a different origin (domain, protocol, and port) than its own origin.**

An example of a cross-origin request: The frontend JavaScript code for a web application served from http://domain-a.com uses XMLHttpRequest to make a request for http://api.domain-b.com/data.json.

For security reasons, browsers restrict cross-origin HTTP requests initiated from within scripts. For example, XMLHttpRequest and the Fetch API follow the same-origin policy. This means that a web application using those APIs can only request HTTP resources from the same origin the application was loaded from, unless the response from the other origin includes the right CORS headers.