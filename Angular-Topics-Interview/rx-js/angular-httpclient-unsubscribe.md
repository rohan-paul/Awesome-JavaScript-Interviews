Is there a need to unsubscribe from the Observable the Angular HttpClient's methods return?

For example:

`this.http.get(url).subscribe(x => this.doSomething());`

Do I need to unsubscribe from this subscription? I am asking this is because I don't know if Angular handles it itself. Plus the request is one-off not continuously.

No, You don't need to unsubscribe it. It observes until getting a response from api. And once the Http request completes it unsubscribes automatically.

Refer to this

[Why not to unsubscribe Http Observables](https://stackoverflow.com/questions/35042929/is-it-necessary-to-unsubscribe-from-observables-created-by-http-methods)

Angular guide http

[AsyncPipe]

#### The AsyncPipe subscribes (and unsubscribes) for you automatically. An HttpClient method does not begin its HTTP request until you call subscribe() on the observable returned by that method. This is true for all HttpClient methods. The AsyncPipe subscribes (and unsubscribes) for you automatically.
