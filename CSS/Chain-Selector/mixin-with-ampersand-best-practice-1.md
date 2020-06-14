I was working `ng-select` Angular package, and for my case here, I am trying to target both the below 2 classes

```css
class="ng-select ng-dropdown-panel"

// And also
class="ng-dropdown-panel sdk-ng-select"
```

Note when I use <ng-select> component (which is the popular angular package) in .html file all ng-select related classes will have the ultimate parent 'ng-select'

Here's my overall structur of the @mixin in .scss file 

```css
@mixin sdk-ng-select {
    ...many styles here
.ng-dropdown-panel,
  &.ng-dropdown-panel.sdk-ng-select {
    .ng-dropdown-footer {
      @extend .sdk-text-body-light-2;
      display: flex;
      align-items: center;
      justify-content: center;      
    }
...many styles here
}

.sdk-ng-select {
  @include sdk-ng-select();
}

```

Then in an .html file of Angular component was consuming the above style as below

<ng-select
 class="sdk-ng-select"
>
</ng-select>

### The above will work, but its the wrong way to handle.


### Problem with above 

`&.ng-dropdown-panel.sdk-ng-select` should not be required.

I could simply do 

```css
.ng-dropdown-panel, &.ng-dropdown-panel
```

#### In the above, the first selector (.ng-dropdown-panel) matches "ng-dropdown-panel" inside the "ng-select"

#### The second selector (&.ng-dropdown-panel) matches <div class="ng-dropdown-panel sdk-ng-select"> i.e. both the classes

`.ng-dropdown-panel.sdk-ng-select`


### Recollect, the way ampersand work, that it will replace "&" with `.parent-class`, which becomes

`.ng-dropdown-panel.sdk-ng-select` in our generated CSS.

The downside to repeating the `.sdk-ng-select` selector inside the mixing (as I was doing in the top of this page) is that mixin is made in a way where it does not know about the class `.sdk-ng-select`, instead, it is used inside it, like below. 

```css
  .sdk-ng-select {
  @include sdk-ng-select();
}
```

And having the selector `.sdk-ng-select` inside the mixin breaks this structure.

So the correct version would be

```css
  .ng-dropdown-panel,
  &.ng-dropdown-panel {
    .ng-dropdown-footer {
      @extend .sdk-text-body-light-2;
      display: flex;
      
    }
```
