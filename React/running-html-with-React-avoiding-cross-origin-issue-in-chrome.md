### When simply adding React to a normal .html file and running tha .html file directly in Chrome will throw cross-origin error. So, I have run this .html file with a local web-server.

## How to run / launch the individual index.html or other .html files from the respective sub-folder in Google-Chrome

In this repo many of the sub-folder contains an index.html or some other .html file and if I try to just run those files in Google-Chrome, will get the below error

``Failed to load file:///home/paul/codes-Lap/React/React-snippets/Redux-Counter-1st-Project/index.js: Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https.``

### Reason of this issue -
Chrome has strict security around Cross origin requests, especially when reading from the local file structure.

Some suggest to resolve this issue, by launching that .html file using Chrome with **"--allow-file-access-from-files"** flag. **But that flag is dangerous!! Leaves my file system open for access. Documents originating from anywhere, local or web, should not, by default, have any access to local file:/// resources.  SO DONT USE THIS "--allow-file-access-from-files" flag IN CHROME**

## Best solution to above to serve those local .html file is by running a  little http server locally as [suggested in this Stack Overflow question](https://stackoverflow.com/questions/18586921/how-to-launch-html-using-chrome-at-allow-file-access-from-files-mode).


## --- For Windows / Linux ---

The easiest is to install http-server globally using node's package manager:

``npm install -g http-server``

Then simply run ``http-server`` in the project root directory:

```
Eg. d:\my_project> http-server
```

Starting up http-server, serving ./
Available on:
 http:169.254.116.232:8080
 http:192.168.88.1:8080
 http:192.168.0.7:8080
 http:127.0.0.1:8080
Hit CTRL-C to stop the server

Or you can also install Python under windows, and follow the instructions below.

## --- For Linux ---

Since Python is usually available in most linux distributions, just run ``python -m SimpleHTTPServer`` in your project directory, and you can load your page on http://localhost:8000

In Python 3 the SimpleHTTPServer module has been merged into http.server, so the new command is ``python3 -m http.server`` .

If there's an index.html file in that directory the the server will by default run that, and if the .html file name is something else, then the server will show in browser the list of files in that directory.

Easy, and no security risk of accidentally leaving the browser open vulnerable.