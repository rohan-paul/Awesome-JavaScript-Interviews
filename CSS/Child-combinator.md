[Official Doc](https://www.w3.org/TR/selectors/#child-combinators)

A child combinator describes a childhood relationship between two elements. A child combinator is made of the "greater-than sign" (U+003E, >) code point and separates two compound selectors.

Examples: The following selector represents a p element that is child of body:
body > p
The following example combines descendant combinators and child combinators.

div ol>li p

It represents a p element that is a descendant of an li element; the li element must be the child of an ol element; the ol element must be a descendant of a div. Notice that the optional white space around the ">" combinator has been left out.

So in the above **descendant** means an elmenent can be a child or grandchild or any level of nested child.

#### The main point is **>** is the **child combinator** while A descendant combinator is whitespace that separates two compound selectors.

#### Descendant combinator

At times, authors may want selectors to describe an element that is the descendant of another element in the document tree (e.g., "an em element that is contained within an H1 element"). The descendant combinator expresses such a relationship.

**Examples of Descendant combinator** : For example, consider the following selector:

h1 em
It represents an em element being the descendant of an h1 element.

But **>** means it must be the direct child of a parent element.

Thats why **>** is the **child combinator**, sometimes mistakenly called the **direct descendant combinator**

That means the selector div > p.some_class only selects paragraphs of .some_class that are nested directly inside a div, and not any paragraphs that are nested further within.

An illustration:

```html
<div>
	<p class="some_class">Some text here</p>
	<!-- Selected [1] -->
	<blockquote>
		<p class="some_class">More text here</p>
		<!-- Not selected [2] -->
	</blockquote>
</div>
```

Explanations of what's selected and what's not:

**Selected**

This p.some_class is located directly inside the div, hence a parent-child relationship is established between both elements.

**Not selected**

This p.some_class is contained by a blockquote within the div, rather than the div itself. Although this p.some_class is a descendant of the div, it's not a child; it's a grandchild.

Consequently, while **div > p.some_class** won't match this element, **div p.some_class** will, using the **descendant combinator** instead.

#### Further Reading

[descendant-combinators](https://www.w3.org/TR/selectors/#descendant-combinators)

[child-combinators](https://www.w3.org/TR/selectors/#child-combinators)
