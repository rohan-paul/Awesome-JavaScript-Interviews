1> The enctype attribute specifies how the form-data should be encoded when submitting it to the server. The enctype attribute can be used only if method="post". No characters are encoded. This value is required when you are using forms that have a file upload control.

[https://www.w3schools.com/TAGS/att_form_enctype.asp](https://www.w3schools.com/TAGS/att_form_enctype.asp)

2> [https://www.quora.com/When-is-enctype-multipart-form-data-used-in-an-html-form](https://www.quora.com/When-is-enctype-multipart-form-data-used-in-an-html-form)

#### It's necessary when we need to upload any type of file using forms.

``enctype`` is an attribute of form tag which determines the encoding (changing the code representation of characters and symbols) used before the form data is sent to the server. It works only with POST requests.

If you don't specify any type, the default encoding would be converting all spaces to ‘+’ and all spl chars to their corresponding ASCII hex code.

When we upload a file to server, we clearly wouldn't want to mess with the content being sent or the file sent might get corrupted. So, we specify the encoding to be of multipart/form-data. This tells that no encoding is to be done of any character and all data is to be sent as it is.

If you don't use this multipart encoding, the server will fail to process the request and file upload may eventually fail.


2> [https://stackoverflow.com/questions/4526273/what-does-enctype-multipart-form-data-mean](https://stackoverflow.com/questions/4526273/what-does-enctype-multipart-form-data-mean)

When you make a POST request, you have to encode the data that forms the body of the request in some way.

HTML forms provide three methods of encoding.

```
application/x-www-form-urlencoded (the default)
multipart/form-data
text/plain
```
Work was being done on adding application/json, but that has been abandoned.

The specifics of the formats don't matter to most developers. The important points are:

#### When you are writing client-side code, all you need to know is use multipart/form-data when your form includes any <input type="file"> elements.

When you are writing server-side code: Use a prewritten form handling library (e.g. Perl's CGI->param or the one exposed by PHP's $_POST superglobal) and it will take care of the differences for you. Don't bother trying to parse the raw input received by the server.

Never use text/plain.

application/x-www-form-urlencoded is more or less the same as a query string on the end of the URL.

multipart/form-data is significantly more complicated but it allows entire files to be included in the data.

text/plain is introduced by HTML 5 and is useful only for debugging — from the spec: They are not reliably interpretable by computer — and I'd argue that the others combined with tools (like the Net tab in the developer tools of most browsers) are better for that).

A quick and basic implemention of the ``enctype``

```js
<body class="bg-primary">
    <div class="container">
        <div class="row">
            <div class="col-md-6 m-auto">
                <h1 class="text-center display-4 my-4">Mongo File Uploads</h1>
                <form action="/upload" method="POST" enctype="multipart/form-data"></form>
            </div>
        </div>
    </div>
```

### Good Reference

1>