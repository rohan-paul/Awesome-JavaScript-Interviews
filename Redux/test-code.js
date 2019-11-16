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
