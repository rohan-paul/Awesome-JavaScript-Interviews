## localForage is a fast and simple storage library for JavaScript.

localForage improves the offline experience of your web app by using asynchronous storage (IndexedDB or WebSQL) with a simple, localStorage-like API.

[Official site](https://github.com/localForage/localForage)

An important step on the path toward robust, offline web applications is the ability to store data in the user’s browser. Technologies like IndexedDB and localStorage have provided this functionality to web developers, but they are not without their limitations.

The localStorage API is really simple to use, but you can only store text data. This limitation can generally be overcome by storing other types of data as JSON strings, but this can be a pain as you have to encode/decode JSON every time you need to store or retrieve some data. Not to mention you still have a problem if you need to store Blobs or files. LocalStorage is also a synchronous API, which means that your app could hang while data is being stored or retrieved.

## [Example of Localstorage](https://hacks.mozilla.org/2014/02/localforage-offline-storage-improved/)

```js

// Our config values we want to store offline.
var config = {
    fullName: document.getElementById('name').getAttribute('value'),
    userId: document.getElementById('id').getAttribute('value')
};

// Let's save it for the next time we load the app.
localStorage.setItem('config', JSON.stringify(config));

// The next time we load the app, we can do:
var config = JSON.parse(localStorage.getItem('config'));

```
### And now the localForage code for the above

```js
localForage Code
// Save our users.
var users = [ {id: 1, fullName: 'Matt'}, {id: 2, fullName: 'Bob'} ];
localForage.setItem('users', users, function(result) {
    console.log(result);
});
```


## Issues with localStorage:

**1>** It’s synchronous. We wait until the data has been read from the disk and parsed, regardless of how large it might be. This slows down our app’s responsiveness. This is especially bad on mobile devices; the main thread is halted until the data is fetched, making your app seem slow and even unresponsive.

**2>** It only supports strings. Notice how we had to use JSON.parse and JSON.stringify? That’s because localStorage only supports values that are JavaScript strings. No numbers, booleans, Blobs, etc. This makes storing numbers or arrays annoying, but effectively makes storing Blobs impossible (or at least VERY annoying and slow).

IndexedDB, on the other hand, is an asynchronous API that includes great support for a wide range of data types, but the API itself is considerably more complex to use.

Enter localForage, a JavaScript library that provides the ease of use of localStorage with all the advanced features of IndexedDB.

The localForage JavaScript library was developed by the good folks at Mozilla to provide a simple storage API that has all the capabilities of more complex APIs like IndexedDB, but without the steep learning curve.

### Behind the scenes, localForage uses native browser technologies like IndexedDB, WebSQL, and localStorage to actually store data. The localForage API sits on top of this datastore layer and provides a number of methods that can be used for managing data.

### The other main benefit of using localForage is that you don’t have to convert your data structures to JSON in order to save them in the datastore. If the underlying datastore technology (read: localStorage) doesn’t support the data type you provide, then localForage will take care of the JSON wizardry for you so you can just focus on building your app’s functionality.

## Storing Data

The localForage library will automatically set up a datastore using the best storage technology that’s available in the user’s browser.

As with localStorage, the data is stored using key/value pairs. The setItem method is responsible for saving data in the datastore.

``localforage.setItem('key', 'value', callbackFunction);``

The value here can be any kind of data you want: a string, number, object, or even a file.

If the key already exists in the datastore, the existing value will simple be overwritten.

### Unlike with localStorage, the localForage API is asynchronous and therefore you shouldn’t expect the setItem method to return a value. Instead, you can pass a callback function to the setItem method. This callback function will be executed once the data has been stored and will be passed the value that was saved in the datastore.

Note: The amount of storage space accessible to localForage is governed by the underlying datastore technology that’s being used. For localStorage, the general limit is 5MB, although this may vary among browsers. More space is available when IndexedDB is being used, but the user may be prompted to approve additional quota if your app needs to store large amounts of data.

## Retrieving Data
Data can be retrieved from the datastore using the getItem method. You should pass in the key of the item you wish to retrieve, as well as a callback function that will be passed the value for the item.

``localforage.getItem('key', callbackFunction);``

If the specified key doesn’t exist in the datastore, the callback function will be passed null.

## Deleting Data

If you want to delete some data, you can use the removeItem method. Pass in the key of the item you wish to delete and a callback function.

``localforage.removeItem('key', callbackFunction);``

## Clearing The Datastore

You can remove all the data from the datastore using the clear method.

``localforage.clear(callbackFunction);``

Again, this method can be passed a callback function that will be executed when the operation has completed.


### More Reading

1> [http://blog.teamtreehouse.com/using-localforage-offline-data-storage](http://blog.teamtreehouse.com/using-localforage-offline-data-storage)

2> [https://hacks.mozilla.org/2014/02/localforage-offline-storage-improved/](https://hacks.mozilla.org/2014/02/localforage-offline-storage-improved/)

3> [My Implemented code with async-await in my To-Do kind of app for checingin/uncheking items before trave](https://github.com/rohan-paul/check-pack-items-before-travel/tree/master/src/lib/api.js)