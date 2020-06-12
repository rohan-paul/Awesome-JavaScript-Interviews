I was working `ng-select` Angular package, and here my purpose is to target the below classes

```css
class="ng-select ng-dropdown-panel"

// And also
class="ng-dropdown-panel sdk-ng-select"
```

Note when I use <ng-select> component in .html file all ng-select related classes will have the ultimate parent 'ng-select'

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
      padding: 0;
      height: $sdk-ng-select-height;
      border-width: thin;
      border-top: 1px solid #ccc;
      background-color: white;
      color: #1b91fb;
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

The above will work, but its the wrong way to handle.


### Problem with above 

`&.ng-dropdown-panel.sdk-ng-select` should not be required.

I could simply do 

```css
// The first selector in below matches "ng-dropdown-panel" inside the "ng-select"
// the second selector matches <div class="ng-dropdown-panel sdk-ng-select">

.ng-dropdown-panel, &.ng-dropdown-panel

```

The downside to repeating the .sdk-ng-select selector here is that mixin is made in a way where it does not know about the class .sdk-ng-select, instead, it is used inside it, and having the selector inside the mixin breaks this structure.

So the correct version would be


```css
  .ng-dropdown-panel,
  &.ng-dropdown-panel {
    .ng-dropdown-footer {
      @extend .sdk-text-body-light-2;
      display: flex;
      
    }
```
