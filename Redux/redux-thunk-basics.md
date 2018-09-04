<img src="Redux-Thunk.jpeg">

A thunk is another word for a function. But it’s not just any old function. It’s a special (and uncommon) name for a function that’s returned by another. Like this:

```js
function not_a_thunk() {
  // this one is a "thunk" because it defers work for later:
  return function() {
    console.log('do stuff now');
  };
}
```
If I want to execute the “do stuff now” part, you have to call it like ``not_a_thunk()()`` – calling it twice, basically.

At its heart, though, Redux is really simple. Actions are just objects – and they are expected to only be objects. They look like this:

```js
{
  type: "USER_LOGGED_IN",
  username: "dave"
}
```

And, since it’s kind of annoying to build objects by hand all the time, Redux has “action creators” that build these things:

```js
function userLoggedIn() {
  return {
    type: 'USER_LOGGED_IN',
    username: 'dave'
  };
}
```

Same action, but now you can “create” it by calling the userLoggedIn function.

Isn’t it kind of funny that Redux’s so-called “actions” don’t actually do anything? They’re just objects. Boring and simple and inert.



### Other sources to Read

1> This is the recommended one by thunk's own github page
[https://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559](https://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559)


2> [https://medium.com/@gethylgeorge/understanding-how-redux-thunk-works-72de3bdebc50](https://medium.com/@gethylgeorge/understanding-how-redux-thunk-works-72de3bdebc50)

