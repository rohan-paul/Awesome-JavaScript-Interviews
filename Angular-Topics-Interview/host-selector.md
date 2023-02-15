#### :host selector

Use the :host pseudo-class selector to target styles in the element that hosts the component (as opposed to targeting elements inside the component's template).

The :host selector is the only way to target the host element. You can't reach the host element from inside the component with other selectors because it's not part of the component's own template. The host element is in a parent component's template.

Use the function form to apply host styles conditionally by including another selector inside parentheses after :host.

The next example targets the host element again, but only when it also has the active CSS class.

```css
demo.component.css :host {
    display: block;
    border: 1px solid black;
}

:host(.active) {
    border-width: 3px;
}
```

So in other words, sometimes we want to style the component custom HTML element itself, and not something inside its template.

Say, there are two components, c-parent and c-child. Each component contains an <h1> tag. The parent.css style sheet defines the h1 style as xx-large. When you run the code, the style applies only to the <h1> tag in the parent, not to the <h1> tag in the nested child.

```css
<!-- parent.html -->
<template>
    <h1>To Do List (h1)</h1>
    <c-child></c-child>
</template>
/* parent.css */
h1 {
    font-size: xx-large;
}
<!–- child.html-->
<template>
     <h1>To Do Item (h1)</h1>
</template>
```

**A parent component can style a child component, but it styles it as a single element. A parent can’t reach into a child.**

Now let’s style the c-child component from its own style sheet, child.css. A component’s style sheet can reach up and style its own element, which in this example is c-child. And the way we achieve it, is - nstead of using a **c-child selector**, use the **:host** selector.

```css
/* child.css */
:host {
    display: block;
    background: yellow;
}
```

#### By targeting the host element with :host, we’ve applied styling to <c-child> which is the whole component itself, from child.css.

#### Further Reading

[https://ngrefs.com/latest/styling/host-selector](https://ngrefs.com/latest/styling/host-selector)
