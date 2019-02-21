### Basic setup of a CRUD upto the level that I can test it in POSTMAN

Say for example I have an existing CRUD to which I want to add a model named "Tide" which will have the regular CRUD functionalities. I ONLY have to work-on or modify 3 separate files in the project.

#### So first in ./models/Tide.js I will have the below

```js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let tidalSchema = new Schema({
    date: {
        type: String
    },
    time: {
        type: String
    },
    meters: {
        type: String
    }
});

module.exports = mongoose.model('Tide', tidalSchema)

```

#### Then in the project root ./server.js I will have the below

```js

const tidalRoutes = require('./routes/tidalRoutes');

// make the '/api/tidal' browser url route to go to tidalRoutes.js route file

app.use('/api/tidal', tidalRoutes);

```

#### In the above ``app.use`` line very importantly remember the first slash ('/') - because without it the slash will not be put after localhost:3000 and I will get a 404 respnse.

#### And finally, in the project root .routes/tidalRoutes.js I will have the detailed CRUD functions for this data model

```js

const express = require('express');
const router = express.Router();
const Tide = require ('../models/Tide');

router.get('/', (req, res, next) => {
        Tide.find({}, (err, docs) => {
            if (err) {
                return next(err)
            }
            res.status(200).send(docs)
        })
    });

router.post('/', (req, res) => {
    var tide = new Tide(req.body);
        tide.save(function(err, newTide) {
            if(err) throw err;
            res.status(200).send(newTide)
        });
    });

module.exports = router;

```

And now in Postman navigate to ``http://localhost:8080/api/tidal`` (noting my server is running in port 8080) - and send a POST request 

#### Postman > Body Tab > select radio button ‘raw’ > and from the drop-down list select JSON (application / json ) with below data.

```
{
	"date":"1285"
}

```


I will see the below kind of output.

```
{
    "_id": "5bb74835ccc528678694fbbb",
    "date": "1285-01-01T00:00:00.000Z",
    "__v": 0
}

```

And now for the same url in Postman the GET request will show me all the records that was saved in mongo with the above POST reqeust that I made.


