### json format to enter date in mongodb - So I can enter dummy data in Postman

A> First of all there is no seperate date type for Dates. So it has to fall back to string.

https://www.w3schools.com/js/js_json_datatypes.asp

In JSON, values must be one of the following data types:

```js
a string
a number
an object (JSON object)
an array
a boolean
null
```

B> So to get the current date-time use this plain js

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toJSON

```js
var jsonDate = (new Date()).toJSON();

console.log(jsonDate);

2018-05-19T13:30:37.435Z
```

An example below -

```js
{
    "customerId": "abc",
    "driverId": "de",
    "orderItems": [
      0,
      1
    ],
    "selectedRestaurant": "mn",
    "createdAt": "2018-05-19T14:53:49.198Z",
    "updatedAt": "2018-05-19T14:54:49.198Z",
    "deletedAt": "2018-05-19T14:54:49.198Z",
    "completed": true,
    "specialInstructions": "Call me"
}
```