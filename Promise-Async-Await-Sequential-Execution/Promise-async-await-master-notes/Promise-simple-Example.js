const isMomHappy = true;

// Define a function to return a Promise
const willIGetNewPhone = new Promise((resolve, reject) => {
  if (isMomHappy) {
    const phone = {
      brand: "Samsung",
      color: "black"
    };
    resolve(phone);
  } else {
    const reason = new Error("Mom is not happy");
    reject(reason);
  }
});

const showOff = phone => {
  const message =
    "Hey friend, I have a new " + phone.color + " " + phone.brand + " phone";
  return Promise.resolve(message);
};

// call out promise
const askMom = () => {
  willIGetNewPhone
    .then(showOff)
    .then(fullfilled => console.log(fullfilled))
    .then(error => console.log(error.message));
};

askMom();

// Same above example with ES-8 async-await
//
// const isMomHappy = true;

// Promise
const willIGetNewPhone = new Promise((resolve, reject) => {
  if (isMomHappy) {
    const phone = {
      brand: "Samsung",
      color: "black"
    };
    resolve(phone);
  } else {
    const reason = new Error("mom is not happy");
    reject(reason);
  }
});

// 2nd promise
async function showOff(phone) {
  return new Promise((resolve, reject) => {
    var message =
      "Hey friend, I have a new " + phone.color + " " + phone.brand + " phone";

    resolve(message);
  });
}

// call our promise
async function askMom() {
  try {
    console.log("before asking Mom");

    let phone = await willIGetNewPhone;
    let message = await showOff(phone);

    console.log(message);
    console.log("after asking mom");
  } catch (error) {
    console.log(error.message);
  }
}

(async () => {
  await askMom();
})();

/*Further Reading -
[https://scotch.io/tutorials/javascript-promises-for-dummies](https://scotch.io/tutorials/javascript-promises-for-dummies)*/
