const omit = require("lodash.omit");
// import produce from "immer";
const { produce } = require("immer");

const myObj = {
	"0": {
		index: 0,
		creditcardnumber: "8726-4123-8697-2698"
	},
	"1": {
		index: 1,
		creditcardnumber: "1234-5639-3200-7945"
	}
};

// The below assignment wont work
// const { "0", ...rest } = myObj
// console.log(rest);

// With lodash
// console.log(omit(myObj, ["0"]));

// console.log(produce(delete myObj[0]));

const deletedTodosObj = produce(myObj, draft => {
	delete draft[0];
});

console.log(deletedTodosObj);
// console.log(myObj);
