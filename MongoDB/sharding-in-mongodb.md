#### What is Sharding in MongoDB?

Sharding is a concept in MongoDB, which splits large data sets into small data sets across multiple MongoDB instances.

Sometimes the data within MongoDB will be so huge, that queries against such big data sets can cause a lot of CPU utilization on the server. To tackle this situation, MongoDB has a concept of Sharding, which is basically the splitting of data sets across multiple MongoDB instances.

The collection which could be large in size is actually split across multiple collections or Shards as they are called.

#### Logically all the shards work as one collection.

#### How to Implement Sharding

Shards are implemented by using clusters which are nothing but a group of MongoDB instances.

The components of a Shard include

A Shard – This is the basic thing, and this is nothing but a MongoDB instance which holds the subset of the data. In production environments, all shards need to be part of replica sets.

Config server – This is a mongodb instance which holds metadata about the cluster, basically information about the various mongodb instances which will hold the shard data.
A Router – This is a mongodb instance which basically is responsible to re-directing the commands send by the client to the right servers.

#### Further Reading

[https://www.guru99.com/mongodb-sharding-implementation.html](https://www.guru99.com/mongodb-sharding-implementation.html)