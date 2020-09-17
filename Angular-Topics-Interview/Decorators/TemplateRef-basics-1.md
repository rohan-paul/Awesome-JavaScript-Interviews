### TemplateRef

The notion of a template should be familiar for most web developers. It’s a group of DOM elements that are reused in views across the application. Before the HTML5 standard introduced the template tag, most templates arrived to the browser wrapped in a script tag with some variation of the type attribute:

```html
<script id="tpl" type="text/template">
  <span>I am span in template</span>
</script>
```

This approach certainly had many drawbacks like the semantics and the necessity to manually create DOM models. With the template tag a browser parses html and creates a DOM tree but doesn't render it. It can then be accessed through the content property:

```html
<script>
  let tpl = document.querySelector("#tpl")
  let container = document.querySelector(".insert-after-me")
  insertAfter(container, tpl.content)
</script>
<div class="insert-after-me"></div>
<ng-template id="tpl">
  <span>I am span in template</span>
</ng-template>
```

Angular embraces this approach and implements TemplateRef class to work with a template. Here is how it can be used:

```js
@Component({
  selector: "sample",
  template: `<ng-template #tpl>
    <span>I am span in template</span>
  </ng-template>`,
})


export class SampleComponent implements AfterViewInit {
  @ViewChild("tpl") tpl: TemplateRef<any>

  ngAfterViewInit() {
    let elementRef = this.tpl.elementRef
    // outputs `template bindings={}`
    console.log(elementRef.nativeElement.textContent)
  }
}
```

The framework removes the template element from the DOM and inserts a comment in its place. This is how it looks when rendered:

```html
<sample>
  <!--template bindings={}-->
</sample>
```

By itself the **TemplateRef** class is a simple class. It holds a reference to its host element in the **elementRef** property and has one method: **createEmbeddedView**.

However, this method is very useful since it allows us to create a view and return a reference to it as **ViewRef**.

#### Further Reading

[https://indepth.dev/exploring-angular-dom-manipulation-techniques-using-viewcontainerref/](https://indepth.dev/exploring-angular-dom-manipulation-techniques-using-viewcontainerref/)
