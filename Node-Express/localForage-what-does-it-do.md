## localForage is a fast and simple storage library for JavaScript.

localForage improves the offline experience of your web app by using asynchronous storage (IndexedDB or WebSQL) with a simple, localStorage-like API.

[Official site](https://github.com/localForage/localForage)

An important step on the path toward robust, offline web applications is the ability to store data in the user’s browser. Technologies like IndexedDB and localStorage have provided this functionality to web developers, but they are not without their limitations.

The localStorage API is really simple to use, but you can only store text data. This limitation can generally be overcome by storing other types of data as JSON strings, but this can be a pain as you have to encode/decode JSON every time you need to store or retrieve some data. Not to mention you still have a problem if you need to store Blobs or files. LocalStorage is also a synchronous API, which means that your app could hang while data is being stored or retrieved.

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

### More Reading

[http://blog.teamtreehouse.com/using-localforage-offline-data-storage](http://blog.teamtreehouse.com/using-localforage-offline-data-storage)