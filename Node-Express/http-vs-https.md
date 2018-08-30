## What’s difference between http:// and https:// ?

## https = http + cryptographic protocols.

### HTTPS: Encrypted Connections

The two are essentially the same, in that both of them refer to the same “hypertext transfer protocol” that enables requested web data to be presented on your screen. But, HTTPS is still slightly different, more advanced, and much more secure.

Simply put, HTTPS protocol is an extension of HTTP. That “S” in the abbreviation comes from the word Secure and it is powered by Transport Layer Security (TLS) [the successor to Secure Sockets Layer (SSL)], the standard security technology that establishes an encrypted connection between a web server and a browser.

Without HTTPS, any data you enter into the site (such as your username/password, credit card or bank details, any other form submission data, etc.) will be sent plaintext and therefore susceptible to interception or eavesdropping. For this reason, you should always check that a site is using HTTPS before you enter any information.

In addition to encrypting the data transmitted between the server and your browser, TLS also authenticates the server you are connecting to and protects that transmitted data from tampering.

Also, to achieve this security in https, Public Key Infrastructure (PKI) is used because public keys can be used by several Web Browsers while private key can be used by the Web Server of that particular website. The distribution of these public keys is done via Certificates which are maintained by the Browser. You can check these certificates in your Browser settings.

## Differences between HTTP and HTTPS - some key points

In HTTP, URL begins with “http://” whereas URL starts with “https://”

HTTP uses port number 80 for communication and HTTPS uses 443

HTTP Works at Application Layer and HTTPS works at Transport Layer

In HTTP, Encryption is absent and Encryption is present in HTTPS as discussed above

HTTP does not require any certificates and HTTPS needs SSL Certificates

With HTTPS if anyone in between the sender and the recipient could open the message, they still could not understand it. Only the sender and the recipient, who know the "code," can decipher the message.

### To do this, the computer at each end uses a document called an "SSL Certificate" containing character strings that are the keys to their secret "codes."

## SSL certificates contain the computer owner's "public key."

The owner shares the public key with anyone who needs it. Other users need the public key to encrypt messages to the owner. The owner sends those users the SSL certificate, which contains the public key. The owner does not share the private key with anyone.


## Advantages of HTTPS
In most cases, sites running over HTTPS will have a redirect in place. Therefore, even if you type in HTTP:// it will redirect to an https over a secured connection

It allows users to perform secure e-commerce transaction, such as online banking.

SSL technology protects any users and builds trust

An independent authority verifies the identity of the certificate owner. So each SSL Certificate contains unique, authenticated information about the certificate owner.


## Limitations of HTTPS

HTTPS protocol can't stop stealing confidential information from the pages cached on the browser

SSL data can be encrypted only during transmission on the network. So it can't clear the text in the browser memory

HTTPS can increase computational overhead as well as network overhead of the organization