## TCP (Transmission Control Protocol) vs HTTP (HyperText Transfer Protocol)

#### The most fundamental difference between the two is that  TCP and HTTP works at different layers, i.e, they have independent (and radically different ) tasks to perform. TCP is a transport-layer protocol, and HTTP is an application-layer protocol that runs over TCP.

TCP is invisible to most end users, providing the standards for moving packets of information from one computer to another, whereas HTTP is an “application layer protocol” that makes itself known every time someone types in a URL

TCP works in the Transport layer while HTTP works in Application layer of TCP/IP model. This just means that HTTP works on top of TCP. TCP is in charge of setting up a reliable connection between two machines and HTTP uses this connection to transfer data between the server and the client. HTTP is used for transferring data while TCP is in charge of setting up a connection which should be used by HTTP in the communication process. Without TCP, HTTP cannot function (to be crisp).

Also, Look at the steps below in a high level that occurs at the background when a user tried to access a website.

DNS Resolution -> TCP Handshake -> HTTP using the connection to exchange information between two machines.

So, here is in some more details

