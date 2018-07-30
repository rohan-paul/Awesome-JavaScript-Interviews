## When I have bin/www in an express project and www is my entry file to launch the app

Explanation so, basically it removes all the create and start server code from your app.js and let you focus only on the application logic part. Note: If you see in package.json file you would note this:

```js
"scripts": {
  "start": "node ./bin/www"
}
```

this means if you type in terminal npm start then it will automatically start the ./bin/www file.


## In a Project, where there’s a Package.json file - To check which version of a particular package is installed run  - VERY IMPORTANT

``$ npm ls package_name``

e.g.

``$ npm ls webpack``


## "dev": "concurrently \"npm run server\" \"npm run client\""

/home/paul/codes-Lap/React/MERN-Practice-Post-Bootcamp/brad-mern-shopping-list/package.json

The back slashes “\” are actually acting as escape characters before the double quotes.


## "client-install": "npm install --prefix client",

/home/paul/PAUL/H/Web/R/R-Vid/WIP/Small-MERN-PostBootcamp/Brad-YouTube-MERN/Learn The MERN Stack [3] - Client Setup & Reactstrap-Setting up Proxy-Explains bind(this).webm

In a MERN project, when I have a separate /client directory containing all the client codes - that means somebody need to go into client directory and run < npm install >

But if I want to do it while my terminal is at the root directory / i.e. without cd-ing into client - I just include the below in script section of my package.json in the server

``"client-install": "npm install --prefix client",``

And run ``npm client-install``

## package.json main parameter

/home/paul/codes-Lap/React/boilerplate/redux-boilerplate-base-counter/src/App.js

