### What are the options in a cookie

There are few below options available for a cookie,

By default, the cookie is deleted when the browser is closed but you can change this behavior by setting expiry date (in UTC time).

```js
document.cookie = "username=John; expires=Sat, 8 Jun 2019 12:00:00 UTC"
```

By default, the cookie belongs to a current page. But you can tell the browser what path the cookie belongs to using a path parameter.

```js
document.cookie = "username=John; path=/services"
```
