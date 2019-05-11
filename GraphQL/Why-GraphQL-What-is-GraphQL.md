GraphQL is a query language created by Facebook in 2012 which provides a common interface between the client and the server for data fetching and manipulations.

The client asks for various data from the GraphQL server via queries. The response format is described in the query and defined by the client instead of the server: they are called client‐specified queries.

The structure of the data is not hardcoded as in traditional REST APIs - this makes retrieving data from the server more efficient for the client.

#### Drawbacks of REST
The core concept of REST is that everything is a resource. While REST was a great solution when it was first proposed, there are some pretty significant issues that the architecture suffers from right now. Let’s explore some of the most significant limitations of REST today:

#### 1- Multiple Round Trips To Fetch Related Resources
Today’s web and mobile applications are often data-driven and require large sets of data combining related resources. Accessing those data by using a REST-based API often requires us to do multiple round-trips to collect everything what is needed. E.g. imagine you’d like to request information from a post entity. At the same time you’d like to request information of post author (which is a different entity). Typically this is done by sending two request to the REST API (e.g. by using HTTP GET). First to retrieve the post object and second to retrieve the user object.

Endpoints for posts and users:

mydomain.com/posts/:id

mydomain.com/users/:id

#### Over Fetching / Under Fetching

Another common problem which occurs when using RESTful services is the problem of over / under fetching. So what does that exactly mean? Let’s get back to the previous example. By using endpoint mydomain.com/posts/:id we’re fetching data for a specific post. Each post might comprise the following properties: id, title, user, and body. You’ll always get back the complete set of data. There is no way to limit the response to only contain a subset of data like title and user.


#### Explain the main difference between REST and GraphQL

The main and most important difference between REST and GraphQL is that GraphQL is not dealing with dedicated resources, instead everything is regarded as a graph and therefore is connected and can be queried to app exact needs.

 This means that you can tailor the request (query) to your exact needs by using the GraphQL query language and describing what you would like to get as an answer. You can combine different entities in one query and you are able to specific which attributes should be included in the response on every level, e.g.:

```
{
     post(id: 1) {
        title
        user {
            name
            email
            courses {
                title
            }
        }
     }
}
```