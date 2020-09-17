// Let’s take this nested object as an example.

const user = {
    id: 101,
    email: 'jack@dev.com',
    personalInfo: {
        name: 'Jack',
        address: {
            line1: 'westwish st',
            line2: 'washmasher',
            city: 'wallas',
            state: 'WX'
        }
    }
}
// To access the name of the our user, we’ll write

const name = user.personalInfo.name;
console.log(name);
const userCity = user.personalInfo.address.city;
console.log(userCity);

// But, for some reason, if our user's personal info is not available, the object structure will be like this,

const user1 = {
    id: 101,
    email: 'jack@dev.com'
}
// console.log(user1.personalInfo.name);  //=> TypeError: Cannot read property 'name' of undefined

// Then to access the name property and also not throw "Cannot read property 'name' of undefined." - do the following in plain vanilla js

const name1 = user1 && user1.personalInfo ? user1.personalInfo.name : null;
// console.log(name1); // => null

// This is okay if your nested structure is simple, but if you have your data nested 5 or 6 levels deep, then your code will look really messy like this,

let city;
if (
    data && data.user && data.user.personalInfo &&
    data.user.personalInfo.addressDetails &&
    data.user.personalInfo.addressDetails.primaryAddress
   ) {
    city = data.user.personalInfo.addressDetails.primaryAddress;
}

// Oliver Steele's Nested Object Access Pattern - for the same data above, if I have to access the 'name' property and not throw any error. But ofcourse with each more nesting level the parenthesis will continue to grow.

const name2 = (((user1 || {}).personalInfo) || {}).name;
console.log(name2);

/* Explanation -
With this notation, you'll never run into Cannot read property 'name' of undefined. You basically check if user exists, if not, you create an empty object on the fly. This way, the next level key will always be accessed from an object that exists or an empty object, but never from undefined.

Unfortunately, you cannot access nested arrays with this trick
*/