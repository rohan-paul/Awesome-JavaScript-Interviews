### 1> ejs stands for embedded javascript

### <% 'Scriptlet' tag, for control-flow, no output
### <%= Outputs the value into the template (HTML escaped)
### <%- Outputs the unescaped value into the template

### So, everything inside <% %> tags is executed and everything inside <%= %> tags inserts itself into the returned HTML string.

### In other words - JavaScript between <% %> is executed. JavaScript between <%= %> adds HTML to the result. This is a live nice example - [http://www.embeddedjs.com/](http://www.embeddedjs.com/)

### 2> http://ejs.co/#install


<%_ ‘Whitespace Slurping’ Scriptlet tag, strips all whitespace before it
<%# Comment tag, no execution, no output
<%% Outputs a literal '<%'
%> Plain ending tag
-%> Trim-mode ('newline slurp') tag, trims following newline
_%> ‘Whitespace Slurping’ ending tag, removes all whitespace after it


## Further Reading

[https://github.com/mde/ejs/blob/master/docs/syntax.md](https://github.com/mde/ejs/blob/master/docs/syntax.md) - Good Official Dox