# Arrow functions are cool in ES6. When should you NOT use arrow functions. Name three or more cases.

Arrow functions are neat but are not suitable for all use cases. For those who are ready to get rid of `function` and move on to arrow functions, it's time to examine a simple scenario where the arrow function would complicate your logic.

## 1. Event Handlers

Let's look at this example, we have a link on our page with an id of `myLink`. Every time you hover over this link, a CSS class `highlight` is toggled and the text is highlighted.

```js
var myLink = document.getElementById('myLink');
myLink.addEventListener('mouseenter', function(){
  this.classList.toggle('highlight');
   console.log(this.classList);
});
```
This logs `highlight`.

Using ES6 syntax, this works as expected. Now let's try that in ES6 using arrow functions:

```js
const myLink = document.getElementById('myLink');
myLink.addEventListener('mouseenter', () => {
  this.classList.toggle('hightlight');
   console.log(this.classList);
});
```
This logs `TypeError: Cannot read property 'classList' of undefined`.

If you use an arrow function, the keyword ``this`` is not bound to that element. If we use a regular function, the keyword this will be bound to the element we clicked!



If you're not sure whether an arrow function is appropriate, [Kyle Simpson](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20%26%20beyond/ch2.md) provides us with this awesome chart:

![Arrow Functions Visual Aid](https://github.com/getify/You-Dont-Know-JS/raw/master/es6%20%26%20beyond/fig1.png)


## 2: Object Methods

```js
const person = {
    points: 23,
    score: () => {
        return this.points++;
    }
}

person.score();

console.log(person.points)  // it ouputs 23 irrepective of howmany times i run the above block of code
```
We have our method called score, and whenever we call person.score, it should add one to our points, which is currently 23.

If we run person.score(); a few times, we should be at 26 or something.

But if I call person, points is still at 23. Why?

Because it’s trying to add points to the window! Remember, when using an arrow function this is not bound to anything and it just inherits it from the parent scope which in this case is the window.

So let’s do the same thing with a normal function:

```JavaScript
const person = {
    points: 23,
    score: function()  {
        this.points++;
    }
}

person.score();

console.log(person.points)
```
And now, first output is 24 and then 25 and so on..