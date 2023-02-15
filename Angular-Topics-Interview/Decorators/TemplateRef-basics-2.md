### Template References

We can also have a template injected directly into our component using the ViewChild decorator:

```ts
@Component({
  selector: 'app-root',
  template: `      
      <ng-template #defaultTabButtons>
          <button class="tab-button" (click)="login()">
            {{loginText}}
          </button>
          <button class="tab-button" (click)="signUp()">
            {{signUpText}}
          </button>
      </ng-template>
`})
export class AppComponent implements OnInit {

    @ViewChild('defaultTabButtons')
    private defaultTabButtonsTpl: TemplateRef<any>;

    ngOnInit() {
        console.log(this.defaultTabButtonsTpl);
    }

}
```

Things that are inside `ng-template` component can only be grabbed and used somewhere else later.
To be able to grab this template, I have given it a variable called "defaultTabButtons". 

And then going into the Component code of this file, adding the same "defaultTabButtons" variable inside ViewChild. So this 'defaultTabButtons" acts as a hook to grab thinks inside `ng-template`

As we can see, the template can be injected just like any other DOM element or component, by providing the template reference name defaultTabButtons to the ViewChild decorator.

This means that templates are accessible also at the level of the component class, and we can do things such as for example pass them to child components!

An example of why we would want to do that is to create a more customizable component, where can pass to it not only a configuration parameter or configuration object: we can also pass a template as an input parameter.


#### Important 
Sometime, we need to be able to access the code that is grabbed by the `ViewChild`. To do so, we are going to use a lifecycle hook called `AfterViewInit`.


#### Further Reading

[https://blog.angular-university.io/angular-ng-template-ng-container-ngtemplateoutlet/](https://blog.angular-university.io/angular-ng-template-ng-container-ngtemplateoutlet/)
