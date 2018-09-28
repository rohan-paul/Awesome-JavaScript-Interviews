### Basic setup of mongodb with env variable so my server accesses mongodb from env varible

First install ``dotenv`` package with ``npm i dotenv``


Applications that rely on third-party sources for data will at some point need to include things like OAuth tokens, SSH keys, or API credentials. This becomes an issue when the code for the application gets pushed up to a public facing source control like GitHub. Once the code is up there it is accessible to anyone that sees it. And so are your keys.

You could add all of the files with sensitive information to your .gitignore file? You could, but then this would prevent all needed files from getting into source control. And anyone wanting to help write the code wouldn’t have a complete version.

One solution for this is to use environment variables. These are local variables that are made available to an application. Creating these variables is made easy with a tool like dotenv. This module loads environment variables from a .env file that you create and adds them to the process.env object that is made available to the application.

### Next add the following line to your app.js or server.js or bin/www  - whichever is the entry file to your app.

``require('dotenv').config()``

create a .env file at the root directory of your application and add the variables to it.

```js
MONGO_DB=mongodb://localhost:27017/ap-port-login
```


## Most importantly - add ``.env`` to your ‘.gitignore’ file so that Git ignores it and it never ends up on GitHub. You can add any keys you want to this file.

### Only drawback - I need to put this li ( require('dotenv').config() ) in every single file where I want to use environment variables AND I have to deploy the dotenv to production where I don’t actually need it.

### Then in my config/config.js - where I am initiating the mongodb connection

```js
'use strict'

const mongoose = require('mongoose');

module.exports = {
    'database': process.env.MONGO_DB,

    // connect function to create a mongoDB connection
    'connectDB' : function () {
        mongoose.connect(this.database)
    },
}
// on mongo connection open event print a console statement
mongoose.connection.on('open', function () {
    console.log('Connected to Database (MongoDB) ');
})

```

### And in my ./app.js

```js
config.connectDB()
```

## Some other examples of the use case of .env file

```js
//contents of .env
SECRET_KEY=abcd1234
const port = 5000

// in my app.js

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config();
app.get('/', (req, res) => {
    res.send(process.env.SECRET_KEY);
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`)
})

```