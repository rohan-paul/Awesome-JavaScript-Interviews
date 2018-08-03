# What happens when you navigate to an URL

This is a classical question in an interview. We can concatenate the topics all above in this theme:

1. Do the DNS query first, it will offer the most suitable IP address with the intelligent DNS parsing.
2. The following is the TCP handshake. The application layer will deliver the data to the transport layer where the TCP protocols will point out the ports of both ends, and then transport the data to the network layer. The IP protocols in the network layer will determine the IP address and how to navigate to the router, and then the packet will be packaged to data frames. And at last is the physical transport.
3. After the TCP handshake is the TLS handshake, and then is the formal data transport.
4. It is possible for the data to go through the load balancing servers before its accesses to the server. The load balancing server will deliver the requests to the application servers and response with an HTML file.
5. After getting the response, the browser will check the status code, it will continue parsing the file with the status code 200. As for 400 or 500, it will throw an error. If there is 300 code, it will redirect to a new URL. And there is also a redirection counter to avoiding too much redirection by throwing an error.
6. The browser will parse the file, do decompression if the file type is with compressions like gzip and then parse the file by the encoding type.
7. After the successful parsing, the render flow will start formally. It will construct the DOM tree by HTML and construct the CSSOM with CSS. If there is a `script` tag, browser will check it whether has the `async` or `defer` attributes, the former will download and execute the JS file in parallel, and the latter will load the file first then wait to execute until the HTML has been parsed. If none of them, it will block the render engine until the JS file has been executed. HTTP/2 may highly improve the download efficiency for pictures.
8. The `DOMContentLoaded` event will be triggered after the initial HTML has been loaded and parsed completely.
9. The Render tree will be constructed following the CSSOM and the DOM tree, in which the layout of page elements, styles and so on will be calculated.
10. In the process of constructing the Render tree, the browser will call the GPU to paint, composite the layers and display the contents on the screen.

For much more detailed explanation - (https://github.com/alex/what-happens-when/blob/master/README.rst)[https://github.com/alex/what-happens-when/blob/master/README.rst]