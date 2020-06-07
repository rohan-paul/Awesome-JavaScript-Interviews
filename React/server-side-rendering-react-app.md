Server-side rendering (SSR) typically improves SEO and performance.

Server Side Rendering, also called SSR, is the ability of a JavaScript application to render on the server rather than in the browser.

#### Why would we ever want to do so?

It allows your site to have a faster first page load time, which is the key to a good user experience
it is essential for SEO: search engines cannot (yet?) efficiently and correctly index applications that exclusively render client-side. Despite the latest improvements to indexing in Google, there are other search engines too, and Google is not perfect at it in any case. Also, Google favors sites with fast load times, and having to load client-side is not good for speed
it’s great when people share a page of your site on social media, as they can easily gather the metadata needed to nicely share the link (images, title, description..)
Without Server Side Rendering, all your server ships is an HTML page with no body, just some script tags that are then used by the browser to render the application.

Client-rendered apps are great at any subsequent user interaction after the first page load. Server Side Rendering allows us to get the sweet spot in the middle of client-rendered apps and backend-rendered apps: the page is generated server-side, but all interactions with the page once it’s been loaded are handled client-side.

However Server Side Rendering has its drawback too:

it’s fair to say that a simple SSR proof of concept is simple, but the complexity of SSR can grow with the complexity of your application
rendering a big application server-side can be quite resource-intensive, and under heavy load it could even provide a slower experience than client-side rendering, since you have a single bottleneck

#### Further Reading

[https://flaviocopes.com/react-server-side-rendering/](https://flaviocopes.com/react-server-side-rendering/)
