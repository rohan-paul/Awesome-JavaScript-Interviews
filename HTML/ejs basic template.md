### 1> ejs stands for embedded javascript

### <% 'Scriptlet' tag, for control-flow, no output
### <%= Outputs the value into the template (HTML escaped)
### <%- Outputs the unescaped value into the template

### So, everything inside <% %> tags is executed and everything inside <%= %> tags inserts itself into the returned HTML string.

### In other words - JavaScript between <% %> is executed. JavaScript between <%= %> adds HTML to the result. This is a live nice example - [http://www.embeddedjs.com/](http://www.embeddedjs.com/)

### Thats why whenever, I want to execute plain-old javascript and dont want to render into the html, I will use <% and NOT <%=
So thats why when just running a ``for`` or ``if`` loop I dont inlude the "=" sign.

https://github.com/mde/ejs/blob/master/docs/syntax.md#example-3

```js
<dl>
<%for (var i = 0; i < users.length; i++) {    %><%
  var user = users[i]
      , name = user.name // the name of the user
    %><%# comment %>
  <%var age  = user.age; /* the age of the user */%>
  <dt><%= name %></dt>
  <dd><%= age %></dd>
<%}-%>
</dl>
```

### More Explanation

A> To echo a single variable, we just use <%= tagline %>

B>  The syntax to use an EJS partial is: <% include FILENAME %>. The path to the partial is relative to the current file.

```js
<header>
    <% include ../partials/header %>
</header>
```

1> https://scotch.io/tutorials/use-ejs-to-template-your-node-application

### 2> http://ejs.co/#install


<%_ ‘Whitespace Slurping’ Scriptlet tag, strips all whitespace before it
<%# Comment tag, no execution, no output
<%% Outputs a literal '<%'
%> Plain ending tag
-%> Trim-mode ('newline slurp') tag, trims following newline
_%> ‘Whitespace Slurping’ ending tag, removes all whitespace after it


## Further Reading

[https://github.com/mde/ejs/blob/master/docs/syntax.md](https://github.com/mde/ejs/blob/master/docs/syntax.md) - Good Official Dox