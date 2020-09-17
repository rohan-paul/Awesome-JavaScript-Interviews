Let's say we wanted to debounce search queries and dismiss consecutive duplicates since the user is going to be to be typing on a physical or soft keyboard.

This is a reusable reusableSearch that can be reused in multiple components which have a search box.

A benefit of having a reusableSearch is that we can change search behaviour in a single place. Let's say we wanted to debounce search queries and dismiss consecutive duplicates.

```js
// Search.SearchReusableChild
import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

export class ReusableSearchComponent implements OnDestroy {
  private searchQuery = new Subject<string>();

  searchQuery$ = this.searchQuery.pipe(
    debounceTime(150), // 👈
    distinctUntilChanged(), // 👈
  );

  ngOnDestroy(): void {
    this.searchQuery.complete();
  }

  search(query: string): void {
    this.searchQuery.next(query);
  }
}


// Now let this integrate this reusable component to a search box component as below.


// search-box.component.ts
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { ReusableSearchComponent } from './Search.SearchReusableChild';

@Component({
  providers: [ReusableSearchComponent],
  selector: 'app-search-box',
  template: `
    <input
      type="search"
      placeholder="Search..."
      (input)="onSearch($event.target.value)"> <!-- [1] -->
  `,
})
export class SearchParentComponent implements OnInit {
  @Output()
  search = new EventEmitter<string>();

  constructor(
    private reusableSearch: ReusableSearchComponent,
  ) {}

  ngOnInit(): void {
    this.reusableSearch.searchQuery$.subscribe(searchQuery => // [4]
      this.search.emit(searchQuery)); // [4]
  }

  onSearch(query: string): void { // [2]
    this.reusableSearch.search(query); // [3]
  }
}
```

We only have a dataflow going in one direction. The user enters search queries (1) which are intercepted by the component's event handler (2). The queries are then filtered through the reusableSearch (3). Finally, the reusableSearch's search query observable is connected to the component's output property (4), allowing parent components to use event binding to be notified of user searches.

We've effectively tied the reusableSearch to a search box. If that's the only place where we're going to use this user interaction logic, we might as well reuse the search box component rather than the search reusableSearch. In this way, our consumers–or parent components–only have to use the search box component and bind to its search event to add search functionality.

#### Further Reading

[https://indepth.dev/presenters-with-angular/](https://indepth.dev/presenters-with-angular/)
