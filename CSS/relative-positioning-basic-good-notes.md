Relative Positioning

position: relative;

Relative positioning uses the same four positioning properties (top, right, bottom, left) as absolute positioning. But instead of basing the position of the element upon the browser view port, it starts from where the element would be if it were still in the normal flow.

For example, if you have three paragraphs on your Web page, and the third has a position: relative style placed on it, its position will be offset based on its current location-- not from the original sides of the view port.

Paragraph 1.

Paragraph 2.

Paragraph 3.
In the above example, the third paragraph will be positioned 3em from the left side of the container element, but will still be below the first two paragraphs. It would remain in the normal flow of the document, and just be offset slightly. If you changed it to position: absolute;, anything following it would display on top of it, because it would no longer be in the normal flow of the document.

As an example, if you have a division that is positioned using a value of relative and inside that division, you have a paragraph that you want to position 50 pixels from the top of the division, you add a position value of absolute to that paragraph along with an offset value of 50px on the top property, like this:

position: absolute;
top: 50px;
This absolutely positioned element always display 50 pixels from the top of that relatively positioned division, no matter what else displays there in normal flow. Your absolutely positioned element uses the relatively positioned one as its context, and the positioning value you use is relative to that.

[https://www.lifewire.com/absolute-vs-relative-3466208](https://www.lifewire.com/absolute-vs-relative-3466208)
