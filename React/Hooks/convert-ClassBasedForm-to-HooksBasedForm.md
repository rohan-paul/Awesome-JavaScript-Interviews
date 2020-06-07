##### The below is a class based form from a typical plain vanilla component

[https://github.com/alligatorio/convert-class-to-hook/blob/master/src/components/ClassBasedForm.js](https://github.com/alligatorio/convert-class-to-hook/blob/master/src/components/ClassBasedForm.js)

```js
import React from "react";
import { Form, FormGroup, Input, Label, Col, Button } from "reactstrap";

export default class ClassBasedForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <h1>Class-Based Form</h1>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>
            Email
          </Label>
          <Col sm={8}>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="email"
              value={this.state.email}
              onChange={event => this.setState({ email: event.target.value })}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplePassword" sm={2}>
            Password
          </Label>
          <Col sm={8}>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="password"
              value={this.state.password}
              onChange={event =>
                this.setState({ password: event.target.value })
              }
            />
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 8 }}>
            <Button>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}
```

#### Now the Hooks based functional form

[https://alligator.io/react/converting-to-a-hook/](https://alligator.io/react/converting-to-a-hook/)

```js
import React, { useState } from "react";
import { Form, FormGroup, Input, Label, Col, Button } from "reactstrap";

const FunctionBasedForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Note to declare function inside the function-based-component I have to user the keyword 'const'
  const handleSubmit = event => {
    event.preventDefault();
    console.log(email);
    console.log(password);
  };

  // Note also NO 'this' keyword is needed to invoke the handleSubmit() function in the Form
  return (
    <Form onSubmit={handleSubmit}>
      <h1>Function Based Form</h1>
      <FormGroup row>
        <Label for="exampleEmail" sm={2}>
          Email
        </Label>
        <Col sm={8}>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="examplePassword" sm={2}>
          Password
        </Label>
        <Col sm={8}>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </Col>
      </FormGroup>
      <FormGroup check row>
        <Col sm={{ size: 10, offset: 8 }}>
          <Button>Submit</Button>
        </Col>
      </FormGroup>
    </Form>
  );
};

export default FunctionBasedForm;
```

Let’s take a look at how we updated state in our class-based component:

`onChange={ (event) => this.setState({ email: event.target.value })`

With hooks, we no longer need this or this.setState() since we’re already initiating our state variables and attaching a setter. Since we only have two variables we’re using, we’re going to use an inline function to call the setter that we initiated in useState for each input. We’ll also add our value back without the this prefix.

```js
<Input
  type="email"
  name="email"
  id="exampleEmail"
  placeholder="email"
  value={email}
  onChange={event => setEmail(event.target.value)}
/>

<Input
  type="password"
  name="password"
  id="examplePassword"
  placeholder="password"
  value={ password }
  onChange={ event => setPassword(event.target.value) }
/>
```
