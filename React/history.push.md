### this.props.history.push("/")

[Official Doc](https://reacttraining.com/react-router/core/api/history)

### Effectively this is the most common way to implement ``redirect`` after a successful form submission.


### Use case in my [MERN book library repo](https://github.com/rohan-paul/MERN-book-library/blob/master/src/components/Create.js)

```js
onSubmit = (e) => {
  e.preventDefault();

  const { isbn, title, author, description, published_year, publisher } = this.state;

  axios.post('/api/book', { isbn, title, author, description, published_year, publisher })
    .then((result) => {
      this.props.history.push("/")
    });
}
```

 A> after taking the onSubmit action creating a new book, I can change the url by using the history object that is supplied to our component as props. So a call to history.push('/') changes the url to '/' .

 https://learn.co/lessons/react-router-params

B> https://tylermcginnis.com/react-router-programmatically-navigate/

The real work horse of React Router is the History library. Under the hood it’s what’s keeping track of session history for React Router. When a component is rendered by React Router, that component is passed three different props: location, match, and history. This history prop comes from the History library and has a ton of fancy properties on it related to routing. In this case, the one we’re interested is history.push. What it does is it pushes a new entry onto the history stack - **aka redirecting the user to another route**.

Most obvious implementation will be in a handleClick or onSubmit - after clicking / submitting I wanto the user to get redirected to a new URL and also simultaneously add this page to browser history

https://gist.github.com/eduard-tkv/94592d77a047c1242c7be9a9fd39e439

```js
handleClick(e) {
    e.preventDefault()
    this.props.history.push('/redirected');
  }
```

#### Another implementation - Here, in the onSubmit method, I submit an axios.post which will hit the back-end to upload new data to the mongo database. And after that, I want the page to be redirected to the '/dashboard' page.

```js
onSubmit = (e) => { 
  e.preventDefault();
  const { date, time, tideHeightInMeters } = this.state;
  axios.post('/api/tidal', { date, time, tideHeightInMeters })
  this.props.history.push('/dashboard');
}
```
And then inside the return statement, I will have the below line (the oft-repeated pattern in all form submission)

```js
<form onSubmit={this.onSubmit}>
```