The Block, Element, Modifier methodology (commonly referred to as BEM) is a popular naming convention for classes in HTML and CSS.

#### Block

Stan dalone entity that is meaningful on its own.

Examples
header, container, menu, checkbox, input

To form a CSS class, add a short prefix for namespacing: .block

#### Element

A part of a block that has no standalone meaning and is semantically tied to its block.

Examples
menu item, list item, checkbox caption, header title

CSS class is formed as block name plus two underscores plus element name: .block\_\_elem

#### Modifier

A flag on a block or element. Use them to change appearance or behavior.

Examples
disabled, highlighted, checked, fixed, size big, color yellow

CSS class is formed as block’s or element’s name plus two dashes: .block--mod or .block\_\_elem--mod and .block--color-black with .block--color-red

#### Now an example

Let’s say we want to build a card component. The block would be .card. Then any sections within card would be elements. So in this example, we have image, description, button. BEM naming convention connects block and element with two underscores ex. card\_\_image.

Finally, we have two different types of buttons, success and back. We call these modifiers and we connect them with our element with two dashes, for example .card--button--success.

[https://medium.com/@dannyhuang_75970/what-is-bem-and-why-you-should-use-it-in-your-project-ab37c6d10b79](https://medium.com/@dannyhuang_75970/what-is-bem-and-why-you-should-use-it-in-your-project-ab37c6d10b79)

#### Another example

We can have a normal button for usual cases, and two more states for different ones. Because we style blocks by class selectors with BEM, we can implement them using any tags we want (button, a or even div). The naming rules tell us to use block--modifier-value syntax.

```html
<button class="button">
	Normal button
</button>
<button class="button button--state-success">
	Success button
</button>
<button class="button button--state-danger">
	Danger button
</button>
```

And the css

```
.button {
	display: inline-block;
	border-radius: 3px;
	padding: 7px 12px;
	border: 1px solid #D5D5D5;
	background-image: linear-gradient(#EEE, #DDD);
	font: 700 13px/18px Helvetica, arial;
}
.button--state-success {
	color: #FFF;
	background: #569E3D linear-gradient(#79D858, #569E3D) repeat-x;
	border-color: #4A993E;
}
.button--state-danger {
	color: #900;
}
```

#### Furtehr Readin

[http://getbem.com/naming/](http://getbem.com/naming/)
