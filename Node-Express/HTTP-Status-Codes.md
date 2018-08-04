### Details of HTTP Status Codes
The HTTP status codes are developed as per the Internet standards defined by Internet Engineering Task Force (IETF). They are classified into five different categories as below:

1xx series – Informational Message
2xx – Success Message
3xx – Redirection Message
4xx – Error Messages Related to Client
5xx – Error Messages Related to Server

### Informational Series – 1xx

These are the informational codes send by the server indicating that the request is received from the client successfully and the same is under processing at the server end. This is a provisional response from the server normally contains only the status line and optional headers and is terminated with an empty line. Learn more about each 1xx status codes in detail.

### Success Series – 2xx

These are the success codes send by the server indicating that the request is received and processed successfully. Learn more about each 2xx status codes in detail.

### Redirection – 3xx

These are the status codes for redirection. When a user agent (a web browser or a crawler) requesting URL1 is redirected to another resource URL2 then 3xx codes are returned as a response. These codes are not seen in the browser window since browsers are auto redirected to another URL. Learn more about each 3xx status codes in detail.

### Client Errors – 4xx
These are the errors from the client side which the server could not resolve. Simple and well known example is a “404 – Page Not Found” error displayed in the browser window when an unavailable URL is requested by the browser. Learn more about each 4xx status codes in detail.

### Server Errors Series – 5xx

When a web server can’t fulfill a valid request from a client it sends a 5xx error code in the response. An example is “504 – Gateway Timeout” error where the web server1 is acting as a proxy to get a response from another web server2  but failed to receive a timely response. Learn more about each 5xx status codes in detail.

# List of codes

The list is separated by kind.

### Informational 1xx
- [100](http://httpstatus.es/100) - **Continue** - Client should continue with request.
- [101](http://httpstatus.es/101) - **Switching Protocols** - Server is switching protocols.
- [102](http://httpstatus.es/102) - **Processing** - Server has received and is processing the request.
- [103](http://httpstatus.es/102) - **Processing** - Server has received and is processing the request.
- [122](http://httpstatus.es/102) - **Request-uri too long** - URI is longer than a maximum of 2083 characters.
### Success 2xx
These codes indicate success. The body section if present is the object returned by the request. It is a MIME format object. It is in MIME format, and may only be in text/plain, text/html or one fo the formats specified as acceptable in the request.
- [200](http://httpstatus.es/200) - **Ok** - The request was fulfilled.
- [201](http://httpstatus.es/201) - **Created** - Following a POST command, this indicates success, but the textual part of the response line indicates the URI by which the newly created document should be known.
- [202](http://httpstatus.es/202) - **Accepted** - The request has been accepted for processing, but the processing has not been completed. The request may or may not eventually be acted upon, as it may be disallowed when processing actually takes place. there is no facility for status returns from asynchronous operations such as this.
- [203](http://httpstatus.es/203) - **Partial Information** - When received in the response to a GET command, this indicates that the returned metainformation is not a definitive set of the object from a server with a copy of the object, but is from a private overlaid web. This may include annotation information about the object, for example.
- [204](http://httpstatus.es/204) - **No Response** - Server has received the request but there is no information to send back, and the client should stay in the same document view. This is mainly to allow input for scripts without changing the document at the same time.
- [205](http://httpstatus.es/205) - **Reset Content** - Request processed, no content returned, reset document view.
- [206](http://httpstatus.es/206) - **Partial Content** - partial resource return due to request header.
- [207](http://httpstatus.es/207) - **Multi-Status** - XML, can contain multiple separate responses.
- [208](http://httpstatus.es/208) - **Already Reported** - results previously returned.
- [226](http://httpstatus.es/226) - **Im Used** - request fulfilled, reponse is instance-manipulations.
### Redirection 3xx
The codes in this section indicate action to be taken (normally automatically) by the client in order to fulfill the request.
- [301](http://httpstatus.es/301) - **Moved** - The data requested has been assigned a new URI, the change is permanent. (N.B. this is an optimisation, which must, pragmatically, be included in this definition. Browsers with link editing capabiliy should automatically relink to the new reference, where possible)
- [302](http://httpstatus.es/302) - **Found** - The data requested actually resides under a different URL, however, the redirection may be altered on occasion (when making links to these kinds of document, the browser should default to using the Udi of the redirection document, but have the option of linking to the final document) as for "Forward".
- [303](http://httpstatus.es/303) - **Method** - Like the found response, this suggests that the client go try another network address. In this case, a different method may be used too, rather than GET.
- [304](http://httpstatus.es/304) - **Not Modified** - If the client has done a conditional GET and access is allowed, but the document has not been modified since the date and time specified in If-Modified-Since field, the server responds with a 304 status code and does not send the document body to the client.
- [305](http://httpstatus.es/305) - **Use Proxy** - Content located elsewhere, retrieve from there.
- [306](http://httpstatus.es/306) - **Switch Proxy** - Subsequent requests should use the specified proxy.
- [307](http://httpstatus.es/307) - **Temporary Redirect** - Connect again to different URI as provided.
- [308](http://httpstatus.es/308) - **Permanent Redirect** - Connect again to a different URI using the same method.
### Client side errors 4xx
The 4xx codes are intended for cases in which the client seems to have erred, and the 5xx codes for the cases in which the server is aware that the server has erred. It is impossible to distinguish these cases in general, so the difference is only informational.
The body section may contain a document describing the error in human readable form. The document is in MIME format, and may only be in text/plain, text/html or one for the formats specified as acceptable in the request.
- [400](http://httpstatus.es/400) - **Bad Request** - The request had bad syntax or was inherently impossible to be satisfied.
- [401](http://httpstatus.es/401) - **Unauthorized** - The parameter to this message gives a specification of authorization schemes which are acceptable. The client should retry the request with a suitable [Authorization](http://www.w3.org/Protocols/HTTP/HTRQ_Headers.html#z9) header.
- [402](http://httpstatus.es/402) - **Payment Required** - The parameter to this message gives a specification of charging schemes acceptable. The client may retry the request with a suitable ChargeTo header.
- [403](http://httpstatus.es/403) - **Forbidden** - The request is for something forbidden. Authorization will not help.
- [404](http://httpstatus.es/404) - **Not Found** - The server has not found anything matching the URI given.
- [405](http://httpstatus.es/405) - **Method Not Allowed** - Request method not supported by that resource.
- [406](http://httpstatus.es/406) - **Not Acceptable** - Content not acceptable according to the Accept headers.
- [407](http://httpstatus.es/407) - **Proxy Authentication Required** - Client must first authenticate itself with the proxy.
- [408](http://httpstatus.es/408) - **Request Timeout** - Server timed out waiting for the request.
- [409](http://httpstatus.es/409) - **Conflict** - Request could not be processed because of conflict.
- [410](http://httpstatus.es/410) - **Gone** - Resource is no longer available and will not be available again.
- [411](http://httpstatus.es/411) - **Length Required** - Request did not specify the length of its content.
- [412](http://httpstatus.es/412) - **Precondition Failed** - Server does not meet request preconditions.
- [413](http://httpstatus.es/413) - **Request Entity Too Large** - Request is larger than the server is willing or able to process.
- [414](http://httpstatus.es/414) - **Request URI Too Large** - URI provided was too long for the server to process.
- [415](http://httpstatus.es/415) - **Unsupported Media Type** - Server does not support media type.
- [416](http://httpstatus.es/416) - **Requested Rage Not Satisfiable** - Client has asked for unprovidable portion of the file.
- [417](http://httpstatus.es/417) - **Expectation Failed** - Server cannot meet requirements of Expect request-header field.
- [418](http://httpstatus.es/418) - **I'm a teapot** - I'm a teapot.
- [420](http://httpstatus.es/420) - **Enhance Your Calm** - Twitter rate limiting.
- [421](https://tools.ietf.org/html/rfc7540#page-66) - **Misdirected Request** - Server is not able to produce a response.
- [422](http://httpstatus.es/422) - **Unprocessable Entity** - Request unable to be followed due to semantic errors.
- [423](http://httpstatus.es/423) - **Locked** - Resource that is being accessed is locked.
- [424](http://httpstatus.es/424) - **Failed Dependency** - Request failed due to failure of a previous request.
- [426](http://httpstatus.es/426) - **Upgrade Required** - Client should switch to a different protocol.
- [428](http://httpstatus.es/428) - **Precondition Required** - Origin server requires the request to be conditional.
- [429](http://httpstatus.es/429) - **Too Many Requests** - User has sent too many requests in a given amount of time.
- [431](http://httpstatus.es/429) - **Request Header Fields Too Large** - Server is unwilling to process the request.
- [444](http://httpstatus.es/444) - **No Response** - Server returns no information and closes the connection.
- [449](http://httpstatus.es/449) - **Retry With** - Request should be retried after performing action.
- [450](http://httpstatus.es/450) - **Blocked By Windows Parental Controls** - Windows Parental Controls blocking access to webpage.
- [451](http://httpstatus.es/451) - **Wrong Exchange Server** - The server cannot reach the client's mailbox.
- [499](http://httpstatus.es/499) - **Client Closed Request** - Connection closed by client while HTTP server is processing.
### Server side error 5xx
This means that even though the request appeared to be valid something went wrong at the server level and it wasn’t able to return anything.
- [500](http://httpstatus.es/500) - **Internal Error** - The server encountered an unexpected condition which prevented it from fulfilling the request.
- [501](http://httpstatus.es/501) - **Not Implemented** - The server does not support the facility required.
- [502](http://httpstatus.es/502) - **Service temporarily overloaded** - The server cannot process the request due to a high load (whether HTTP servicing or other requests). The implication is that this is a temporary condition which maybe alleviated at other times.
- [503](http://httpstatus.es/503) - **Gateway timeout** - This is equivalent to Internal Error 500, but in the case of a server which is in turn accessing some other service, this indicates that the respose from the other service did not return within a time that the gateway was prepared to wait. As from the point of view of the clientand the HTTP transaction the other service is hidden within the server, this maybe treated identically to Internal error 500, but has more diagnostic value.
- [504](http://httpstatus.es/504) - **Gateway Timeout** - Gateway did not receive response from upstream server.
- [505](http://httpstatus.es/505) - **Http Version Not Supported** - Server does not support the HTTP protocol version.
- [506](http://httpstatus.es/506) - **Variant Also Negotiates** - Content negotiation for the request results in a circular reference.
- [507](http://httpstatus.es/507) - **Insufficient Storage** - Server is unable to store the representation.
- [508](http://httpstatus.es/508) - **Loop Detected** - Server detected an infinite loop while processing the request.
- [509](http://httpstatus.es/509) - **Bandwidth Limit Exceeded** - Bandwidth limit exceeded.
- [510](http://httpstatus.es/510) - **Not Extended** - Further extensions to the request are required.
- [511](http://httpstatus.es/511) - **Network Authentication Required** - Client needs to authenticate to gain network access.
- [598](http://httpstatus.es/598) - **Network Read Timeout Error** - Network read timeout behind the proxy.
- [599](http://httpstatus.es/599) - **Network Connect Timeout Error** - Network connect timeout behind the proxy.

