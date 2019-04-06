[Official Doc](https://nodejs.org/api/buffer.html#buffer_buffer)

Prior to the introduction of TypedArray, the JavaScript language had no mechanism for reading or manipulating streams of binary data. The Buffer class was introduced as part of the Node.js API to enable interaction with octet streams in TCP streams, file system operations, and other contexts.

With TypedArray now available, the Buffer class implements the Uint8Array API in a manner that is more optimized and suitable for Node.js.

Instances of the Buffer class are similar to arrays of integers but correspond to fixed-sized, raw memory allocations outside the V8 heap. The size of the Buffer is established when it is created and cannot be changed.

The Buffer class is within the global scope, making it unlikely that one would need to ever use require('buffer').Buffer.

```js

// Creates a zero-filled Buffer of length 10.
const buf1 = Buffer.alloc(10);

// Creates a Buffer of length 10, filled with 0x1.
const buf2 = Buffer.alloc(10, 1);

// Creates an uninitialized buffer of length 10.
// This is faster than calling Buffer.alloc() but the returned
// Buffer instance might contain old data that needs to be
// overwritten using either fill() or write().
const buf3 = Buffer.allocUnsafe(10);
```

### Stream

Stream in Node.js simply means a sequence of data being moved from one point to the other over time. The whole concept is, you have a huge amount of data to process, but you don’t need to wait for all the data to be available before you start processing it.

Basically, this big data is broken down and sent in chunks. So from the original definition of a buffer (“streams of binary data… in the context of… file system”) this simply means binary data being moved in the file system. For example, moving the texts stored in file1.txt to file2.txt.

### Buffer

We’ve seen that a stream of data is the movement of data from one point to the other. But, there is a minimum and a maximum amount of data a process could take over time. So if the rate the data arrives is faster than the rate the process consumes the data, the excess data need to wait somewhere for its turn to be processed.

On the other hand, if the process is consuming the data faster than it arrives, the few data that arrive earlier need to wait for a certain amount of data to arrive before being sent out for processing.

That “waiting area” is the buffer! It is a small physical location in your computer, usually in the RAM, where data are temporally gathered, wait, and are eventually sent out for processing during streaming.

We can think of the whole stream and buffer process as a bus station. In some bus stations, a bus is not allowed to depart until a certain amount of passengers arrive or until a specific departure time. Also, the passengers may arrive at different times with different speed. Neither the passengers nor the bus station has control over passengers’ arrival at the station.

In whatever the case may be, there is always a waiting place. That is the Buffer to Node.js! Node.js can’t control the speed or time of data arrival, the speed of the stream. It only can decide when it’s time to send out the data. If it’s not yet time, Node.js will put them in the buffer — the “waiting area” — a small location in the RAM, until it’s time to send them out for processing.


### Interacting with a Buffer

Aside from the one Node.js will automatically create during a stream, it is possible to create and manipulate your own buffer. Interesting right? Let’s create one!

Depending on what you want to achieve, there are different ways to create a buffer. Let’s see some.

```js
// Create an empty buffer of size 10.
// A buffer that only can accommodate 10 bytes.
const buf1 = Buffer.alloc(10);
// Create a buffer with content
const buf2 = Buffer.from("hello buffer");
```

### Once your buffer has been created, you can start interacting with it

```js

// Examine the structure of a buffer
buf1.toJSON()
// { type: 'Buffer', data: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] }

// an empty buffer
buf2.toJSON()
// { type: 'Buffer',
     data: [
       104, 101, 108, 108, 111, 32, 98, 117, 102, 102, 101, 114
     ]
   }
// the toJSON() method presents the data as the Unicode Code Points of the characters
// Examine the size of a buffer

buf1.length // 10
buf2.length // 12. Auto-assigned based on the initial content when created.
// Write to a buffer
buf1.write("Buffer really rocks!")

// Decode a buffer
buf1.toString() // 'Buffer rea'
//oops, because buf1 is created to contain only 10 bytes, it couldn't accommodate the rest of the characters
// Compare two buffers

```

### Some more examples (https://nodejs.org/api/buffer.html#buffer_class_method_buffer_from_string_encoding)

```js
const buf1 = Buffer.from('this is a tést');
const buf2 = Buffer.from('7468697320697320612074c3a97374', 'hex');

console.log(buf1.toString());
// Prints: this is a tést
console.log(buf2.toString());
// Prints: this is a tést
```


## Good References

1> [https://medium.freecodecamp.org/do-you-want-a-better-understanding-of-buffer-in-node-js-check-this-out-2e29de2968e8](https://medium.freecodecamp.org/do-you-want-a-better-understanding-of-buffer-in-node-js-check-this-out-2e29de2968e8)