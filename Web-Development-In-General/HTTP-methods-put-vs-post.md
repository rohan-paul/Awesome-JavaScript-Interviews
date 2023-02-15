Aapart from GET, there are other types of HTTP methods including:

HEAD
POST
PUT
DELETE
CONNECT
OPTIONS
TRACE

## What Does the PUT Method Do?

The PUT method completely replaces whatever currently exists at the target URL with something else. With this method, you can create a new resource or overwrite an existing one given you know the exact Request-URI.

PUT puts a file or resource at a specific URI, and exactly at that URI.

An HTTP PUT is supposed to accept the body of the request, and then store that at the resource identified by the URI.

## What Does the POST Method Do?

The HTTP POST method is used to send user-generated data to the web server. For example, a POST method is used when a user comments on a forum or if they upload a profile picture. A POST method should also be used if you do not know the specific URL of where your newly created resource should reside.
POST sends data to a specific URI and expects the resource at that URI to handle the request. The web server at this point can determine what to do with the data in the context of the specified resource. The POST method is not idempotent, however POST responses are cacheable so long as the server sets the appropriate Cache-Control and Expires headers.

The official HTTP RFC specifies POST to be:

Annotation of existing resources;
Posting a message to a bulletin board, newsgroup, mailing list, or similar group of articles;
Providing a block of data, such as the result of submitting a form, to a data-handling process;
Extending a database through an append operation.
An HTTP POST is more general. It is supposed to initiate an action on the server.