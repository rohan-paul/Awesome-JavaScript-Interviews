# Why is eval() considered dangerous?

The `eval` function allows you to inject a string and evaluate it at any time.

Let's look at this example:

```js
var morning = "good morning"
function speak(greeting) {
  console.log(morning)
}
speak(morning)
```

This logs `good morning`. But what about this:

```js
var greeting = "good morning"
function speak(str) {
  eval(str)
  console.log(greeting)
}
speak("var greeting = 'meow'")
```

This will log `meow`. Meow... indeed. Since no local `greeting` variable was defined. We expected to access the global scope and print 'good morning' ,
Instead, `eval` injected a new local variable into our scope.

So how bad is this:

- You leave your code vulnerable to malicious code injection
- You slow down your code's performance

So it's dangerous and should be avoided in most cases. There are some unique scenarios where an eval is needed, but for 99% of your `eval` is not necessary.
