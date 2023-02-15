#### First see what is em

An em is equal to the computed font-size of that element’s parent. For example, If there is a div element defined with font-size: 16px then for that div and for its children 1em = 16px.
If font-size is not defined explicitly, that element will inherit it from the parent element. The inheritance continues to take place this way amongst ancestors up until the root element. Default font-size of the root element is provided by browser.

If you want to use em for your units, you have to be careful with your layout. It is a good practice not to define font-size explicitly except root element while using em in your project.

#### What is rem unit

**rem** stands for **root em**. The **rem** unit is relative to the root-or the html-element. That means that we can define a single font size on the html element and define all rem units to be a percentage of that.”.

**Converstion from px to rem**

In most modern browsers, 1 rem is equal to 16 pixels. So with a base size of 1rem (a.k.a. 16px) set, we can now use simple division to figure out proper sizing of elements. A headline that is 24px in Sketch is coded as 1.5rem because you take 24px and divide it by the base font size of 16px.

When it comes to spacing and font-sizing, I prefer to use rem. Since rem uses root element’s font-size instead of its parent’s font-size.
Let’s assume, font-size: 10px is set for the root element which makes 1rem = 10px everywhere in our webpage. Since 1px = 0.1rem, calculations are easy.

#### Further Reading

[https://medium.com/code-better/css-units-for-font-size-px-em-rem-79f7e592bb97](https://medium.com/code-better/css-units-for-font-size-px-em-rem-79f7e592bb97)
