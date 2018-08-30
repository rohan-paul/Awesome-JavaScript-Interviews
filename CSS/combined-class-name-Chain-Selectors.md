## css class definition with multiple identifiers in a single line – Understaning how it works

For example -

/home/paul/Downloads/MY-CODING/JS-STACK/Games/HTML5-Game-Development-by-Example-Makzan-Executed-in-APR2016/Card-Matching-Game/css/css3flip.css

```js
.card-flipped .back {
  transform: rotate3d(0,1,0,0deg);
}
```

1> http://www.w3schools.com/cssref/css_selectors.asp

Per Official doc - element element	div p	Selects all <p> elements inside <div> elements

So, .card-flipped .back would mean select all .back class inside .card-flipped class

## 2> Chain Selectors -

https://stackoverflow.com/questions/13444647/css-class-definition-with-multiple-identifiers

### .class1.class2 will match only the elements that have both of them classes defined.

```js

.class1.class2 { background: red; }
<div class="class1 class2"></div>

```

### .class1, .class2 will match the elements with .class1 or .class2

```js

.class1, class2 { background: yellow; }

<div class="class1"></div>
<div class="class2"></div>

```

### .class1 .class2 will match only the elements with class2 within elements with class1.

```js

.class1 .class2 { background: blue; }
<div class="class1">
    <div class="class2"></div>
</div>

```
## 3> Chain selectors are not limited just to classes, you can do it for both classes and ids.

### Classes

```js
.classA.classB {
/*style here*/
}
```
### Class & Id

```js

.classA#idB {

/*style here*/
}
```


### Id & Id

```js

#idA#idB {
/*style here*/
}
```