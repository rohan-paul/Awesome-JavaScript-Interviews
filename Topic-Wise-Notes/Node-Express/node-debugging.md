## Key basic point

1> https://github.com/node-inspector/node-inspector#configuration

Since version 6.3, Node.js provides a built-in DevTools-based debugger which mostly deprecates Node Inspector, see e.g. this blog post to get started. The built-in debugger is developed directly by the V8/Chromium team and provides certain advanced features (e.g. long/async stack traces) that are too difficult to implement in Node Inspector.


# Super Basic Step to get started with debuggin 14-May-2018 - ALSO HOW TO GET TO THE SOURCE CODE IN NODE_MODULE FROM THE

1> https://medium.com/@paul_irish/debugging-node-js-nightlies-with-chrome-devtools-7c4a1b95ae27

Also see this video - https://www.youtube.com/watch?v=Xb_0awoShR8

2> Break on the first statement of the script with --inspect-brk

``node --inspect-brk index.js``

3> In chrome open ``about:inspect`` and it will take me to - ``chrome://inspect/#devices``

where I will see under Remote Target and a link for inspect  > click on that link and the debugging server will open in the below link

4> Now chrome dev-tool will show my the actual source code file, that I am debugging - index.js in this case.

5> Now in that source code file, put a breakmark on the desired line - so I put a  breakpoint on below line

``const app = express(); // creating an instance of express library``

The source file is - /home/paul/codes-Lap/Node/twitter-clone/server.js

Then If I straightaway click on “Step Into Next function” icon > it will NOT execute as in Chrome-Dev-Tool the selected line will be top most line of the file by default. So, I have to run it once, by clicking “Resume script Execution” Green button. Then the selection line will come to where I have put the breakpoint.

And then, click on “Step Into Next function” icon and dev-tool will take me to the source code in

../node_modules/express/lib/application.js file where the express() will have been defined for my above line const app = express()


# Clean step on 8-May-2018

1> https://www.youtube.com/watch?v=Xb_0awoShR8  -  GREAT VIDEO AND EXPLAINES BREAKPOINTS AS WELL

From the source directory of the myscript.js file > run $ node --inspect-brk myscript.js

Will output in terminal

```
Debugger listening on ws://127.0.0.1:9229/d3e41f99-727b-4d71-8bf7-5b52d63d08dd
For help, see: https://nodejs.org/en/docs/inspector
Debugger attached.
```

And on 8-May-2018 > Just with the above command, I got the final debug screen that I needed open up automatically
(chrome-devtools://devtools/bundled/inspector.html?experiments=true&v8only=true&ws=localhost:9229/d3e41f99-727b-4d71-8bf7-5b52d63d08dd)

But if the above screen does not open automatically then > In chrome open about:inspect and it will take me to - chrome://inspect/#devices

where I will see under Remote Target and a link for inspect  > click on that link and the debugging server will open in the below link

chrome-devtools://devtools/bundled/inspector.html?experiments=true&v8only=true&ws=localhost:9229/d3e41f99-727b-4d71-8bf7-5b52d63d08dd

Note that the port no is just the same as was given in the terminal.

Click on the link for “Open dedicated Dev-Tools for Node” in chrome://inspect/#devices  >> And it will open the Chrome-dev-tool


