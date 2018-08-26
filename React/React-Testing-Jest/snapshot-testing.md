### What is Snapshot testing
 A cool feature that Jest has is snapshots. This takes a snapshot of your component and how it renders and then will compare that whenever doing other tests to let you know if something unexpected is happening.

 A snapshot test is essentially what the name implies. Jest takes the component that it is testing, renders it, and then takes a snapshot of what the component should look like. When continuing to work on your project, every time you run your test suite, Jest will do the process over again and compare the old snapshot to a new one. If the snapshots do not match, then they an error message shows in the terminal and highlights the parts that do not match.

Snapshot testing while very useful is not considered TDD. Snapshot testing requires a component to be written already so it can take a picture of it. Snapshot testing also relies on the fact that your component renders correctly already. TDD requires that you write tests for your component that originally fail, and as you code the component, it passes the tests. So while snapshot testing is not TDD, it can still be a useful tool for keeping track of your components and making sure they do not change unexpectedly.

#### Good Guides to refer

https://hackernoon.com/snapshot-testing-react-components-with-jest-744a1e980366