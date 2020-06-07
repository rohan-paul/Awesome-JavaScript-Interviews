The critical rendering path (CRP) looks at the sequence of steps the browser takes to receive HTML, CSS, and JavaScript bytes, as well as the techniques required to render the initial view of the web page.

There are 6 stages to the CRP -

Constructing the DOM Tree
Constructing the CSSOM Tree
Running JavaScript
Creating the Render Tree
Generating the Layout
Painting

In order to display a webpage, a browser must get all the resources that are called by the webpage. A simple example would be a webpage that has one image, one css file, and one javascript file.

Let's look at the path that this page takes before it gets displayed....

browser downloads the html file
browser reads the html and sees that there are one css file, one javascript file and one image
browser starts downloading the image
browser decides it can not display the webpage without first getting the css and javascript
browser downloads the CSS file and reads it to make sure nothing else is being called
browser decides it still can not display the webpage yet until it has the javascript
browser downloads the javascript file and reads it to make sure nothing else is being called
Browser now decides it can display the webpage

####. CSS Object Model (CSSOM)

Just as with HTML, the CSS rules need to be converted into something that the browser understands, so these rules go through the same steps as the document object model.

1. Convert bytes to characters
2. Identify tokens
3. Convert tokens to nodes
4. Build CSSOM

#### Further Reading

[https://medium.com/@luisvieira_gmr/understanding-the-critical-rendering-path-rendering-pages-in-1-second-735c6e45b47a](https://medium.com/@luisvieira_gmr/understanding-the-critical-rendering-path-rendering-pages-in-1-second-735c6e45b47a)

[https://varvy.com/pagespeed/critical-render-path.html](https://varvy.com/pagespeed/critical-render-path.html)
