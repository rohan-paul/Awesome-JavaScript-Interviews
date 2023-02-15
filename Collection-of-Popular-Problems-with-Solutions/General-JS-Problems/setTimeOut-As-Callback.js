// Use setTimeOut function to print something after 1 second . But this settime out should come as a callback function to some other function, which lets say we call asyncSetTimeOut

logSetTimeOut = (cb) => {
    setTimeout(() => {
        cb()
    })
};

asyncSetTimeOut = () => console.log("Hello World")

logSetTimeOut(asyncSetTimeOut);