### What is a WebSocket API?

According to MDN, the WebSocket API is an advanced technology that makes it possible to open a two-way interactive communication session between the user's browser and a server. With the WebSocket API, you can send messages to a server and receive event-driven responses without having to poll the server for a reply.

At the same time, WebSocket does not compromise with the security system of the web. All the WebSocket handshakes can be scrutinized by the browser using embedded developer tools in them.

WebSocket represents a single TCP socket connection, thus eliminating the problem of connection limitation.

### The differences between a WebSocket API and a FETCH API.

- 1. WebSocket is a low-level protocol, based on the concept of socket and port, which are the underlying transport mechanism whereas REST is based on CRUD operation.
- 2. WebSocket require the use of IP address and Port details, which are lower level details for any application whereas RESTful application needs to design operation based on verbs, and HTTP based.
- 3. WebSocket is bi-directional in nature i.e. both way operation from client to server and vice versa is possible whereas REST follows a uni-directional approach.
- 4. WebSocket approach is ideal for real-time scalable application, whereas REST is better suited for the scenario with lots of getting request.
- 5. WebSocket is a stateful protocol whereas REST is based on stateless protocol i.e. client does not need to know about the server and same hold true for the server.
- 6. WebSocket connection can scale vertically on a single server whereas REST, which is HTTP based can scale horizontally.
- 7. WebSocket is ideal for a scenario where high loads are a part of game i.e. real-time scalable chat application whereas REST is better fitted for occasional communication, in a typical GET request scenario to call RESTful APIs.
- 8. WebSocket works better, where client-server communicates over the same TCP connection for the life of web socket connection whereas, for HTTP request, a new TCP connection is initiated.
- 9. WebSocket communication allows client and server to talk independently of each other whereas with the REST based approach, either client is talking to the client or server is talking to the client at any given time.
- 10. WebSocket communication cost is lower whereas REST-based communication is comparatively higher end on the cost.

### Interfaces

#### WebSocket

The primary interface for connecting to a WebSocket server and then sending and receiving data on the connection.

#### CloseEvent

The event sent by the WebSocket object when the connection closes.

#### MessageEvent

The event sent by the WebSocket object when a message is received from the server.

The WebSocket object provides the API for creating and managing a WebSocket connection to a server, as well as for sending and receiving data on the connection.

To construct a WebSocket, use the WebSocket() constructor.
