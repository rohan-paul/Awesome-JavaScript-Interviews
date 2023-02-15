### Components, Styled

The main thing you need to understand about Styled Components is that its name should be taken quite literally. You are no longer styling HTML elements or components based on their class or HTML element:

```js
<h1 className="title">Hello World</h1>
h1.title{
  font-size: 1.5em;
  color: purple;
}
```
Instead, you’re defining styled components that possesses their own encapsulated styles. Then you’re using these freely throughout your codebase: In the below <Title /> is a styled-component

```js
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  color: purple;
`;
<Title>Hello World</Title>
```

This might seem like a minor difference, and in fact both syntaxes are very similar. But they key difference is that styles are now part of their component.

In other words, we’re getting rid of CSS classes as an intermediary step between the component and its styles. As styled-components co-creator Max Stoiber says:

“The basic idea of styled-components is to enforce best practices by removing the mapping between styles and components.”




### Another example - say in a file called Landing.js Component in which the <Wrapper /> is a styled-component

```js

import React from 'react';
import styled from 'styled-components';


<Wrapper>
        <ImgLogo src={require("../Images/logo.png")} />
</Wrapper>

const Wrapper = styled.div`
    background: #ffffff;
    height: 80px;
    position: relative;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
`;

```

### Props Over Classes

In keeping with this no-classes philosophy, styled-components makes use of props over classes when it comes to customizing the behavior of a component. So instead of:

```js
<h1 className="title primary">Hello World</h1> // will be blue
h1.title{
  font-size: 1.5em;
  color: purple;

  &.primary{
    color: blue;
  }
}
```
You’d write the below Title styled-component

```js
const Title = styled.h1`
  font-size: 1.5em;
  color: ${props => props.primary ? 'blue' : 'purple'};
`;

<Title primary>Hello World</Title> // will be blue
```