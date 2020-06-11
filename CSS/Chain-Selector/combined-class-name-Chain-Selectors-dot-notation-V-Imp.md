## css class definition with multiple identifiers in a single line – Understaning how it works

## 1> Chain Selectors -

https://stackoverflow.com/questions/13444647/css-class-definition-with-multiple-identifiers

### `.class1.class2` will match only the elements that have both of the classes defined.

```js
.class1.class2 { background: red; }

<div class="class1 class2"></div>

```

### `.class1, .class2` (i.e. a comma and a space in between) will match the elements with .class1 or .class2

```js
.class1, class2 { background: yellow; }

<div class="class1"></div>
<div class="class2"></div>

```

Chain selectors are not limited just to classes, you can do it for both classes and ids.

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

### 2> Descendant Selector

### `.class1 .class2` will match only the elements with class2 within elements with class1.

```js
.class1 .class2 { background: blue; }

<div class="class1">
    <div class="class2"></div>
</div>

```

### 3> Child Selector

The child selector selects all elements that are the children of a specified element.

The following example selects all <p> elements that are children of a <div> element:

```css
div > p {
    background-color: yellow;
}
```

The meaning of a selector with more classes depends on how you combine them in your declarations:
