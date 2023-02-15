// THIS FILE IS NOT WORKING, AND THE THIS PARTICULAR THIRD-PARTY PACKAGE IS FOR REACT APPS

import update from 'immutability-helper';

// import update from '../node_modules/immutability-helper/index.d.ts'

const myObj_1 = {
    a: 2,
    b: 5,
    c: {
      x: 7,
      y: 4,
    },
  }


let clonedObj = update({ a: 2, b: 5, c: { x: {$set: 27}, y: 4 } })

console.log(myObj_1);

console.log(clonedObj)