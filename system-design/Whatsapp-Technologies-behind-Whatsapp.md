## How Whatsapp Messaging App is Working Technically?

### Protocol used by WhatsApp

The primary protocol in use is XMPP (Extensible Messaging and Presence Protocol).DSL ensures network security and also helps in preventing private data transfer.
Having an XMPP server eliminates the need for multiple client servers for information exchange, allowing the app to scan the user’s contact book to built a contact list useable within your app. It’s the standardized form of Jabber, an open standard based protocol that’s been used to create Facebook Messenger, WeChat, Whatsapp, and the rest.

As and when message is sent, it is queued on the server. The message waits in the queue until the recipient reconnects to receive the message. As and when a message is delivered the sender gets notified by a double check mark near the message. After the delivery the messages are instantly deleted from the server memory.

This instant deletion from server memory helps WhatsApp keep its resources to a bare minimum.

Additionally, Whatsapp uses **HTML5 WebSockets** which communication technology which facilitates two-way communication. The WebSocket is a feature in HTML5 used to establish a solid connection between the web browser and the server. The WebSocket data are directly sent over a socket which provides faster and persistent communication between the server and web browser.

### Database management

Mnesia DB handles the heavy-duty task of database management. Mnesia is a multiuser distributed DBMS which also happens to be the default DB of ERLANG. Mnesia helps achieve quicker request responses, thereby improving the overall efficiency.

### What speciality is required from the chosen database for chat app

Message is going to be very write heavy. Unlike photos, videos etc which are written once and consumed a lot of times by lot of clients, message are written once and consumed by the participants once. For the write heavy system with a lot of data, RDBMS usually do not perform well as every write is not just an append to a table but also an updates to the multiple indices which might required locking and hence might interfere with reads and other writes. However, there are NoSQL databases like HBase, cassandra where writes are cheaper.

With NoSQL, we need to store data in denormalized form. Every user would have his/her own copy of message box. That means we will store two copies of the message, one for each participant for every message send for 1:1 conversation.

To increase the efficiency we can use Caching. This is however not as easy as it seems as one of our feature is to ensure high consistency. Most distributed caching system are good with availability and eventually consistent., but not tight consistent.

For messaging service, every bytes waste has very real impact on the experience of application. By sending less data and reducing HTTPS fetches, messaging service receives updates with low latency and high reliability.

### Backend / API

Erlang is the primary programming language of WhatsApp, much appreciated for the performance reasons. Its major advantages are speed and scalability. And it allows updating the code on the fly.

But of course, Erlang is not the only option. Other chat apps, like Telegram or Kik, use Node.js – the number-one choice for applications that have to process a high volume of short messages requiring low latency.

### Server

WhatsApp started from **Ejabberd, an open source Jabber/XMPP instant messaging server** written in Erlang. It used XMPP (eXtensible Messaging and Presence Protocol). That’s a protocol that handles a message delivery system.

Ejabberd server is based on a set of pluggable modules that enable features like:

One-on-one messaging
Store and forward (offline messages)
Contact List and presence
Group chat – Multi-User Chat (MUC)
Message archive Management (MAM)
Personal event protocol (PEP) and typing indicator
Privacy settings, simple blocking extensions

### Why IM mobile apps need a server

The server is an important part of IM mobile apps since you want messages to go through, even if one of the interlocutors is off-line. For that purpose, we use asynchronous connection. Horizontal scaling (which means adding more machines, not more memory) helps to cope with traffic peaks.

There are two ways of storing messages – you can keep them on servers forever or you can delete them as soon as delivered to be stored locally (which WhatsApp does by using SQLite database). In that case, the messages temporarily ‘queue’ on servers till the recipient comes online. When a message is delivered, the queue is deleted. The same way, the acknowledgements of the messages being sent, delivered, or read will be queued on servers in the form of a particular message ID. Thus, ‘queue health’ (keeping few messages in queues) is an important metric. Whenever the traffic spikes (like at the time of football matches or earthquakes), additional servers are used to tackle the load.
