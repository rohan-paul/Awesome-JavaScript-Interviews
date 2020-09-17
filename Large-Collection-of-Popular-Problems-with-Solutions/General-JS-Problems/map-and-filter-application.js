function swap (a, b) {
  console.log("a is "+ a + " and b i s" +  b );
  a ^= b; 
  b ^= a;
  a ^= b;  
  console.log("a is "+ a + " and b is " +  b );
}

swap(2, 3);

// console.log(toString(2));

numbers = [2 , 3, 1];

function sum (arr) {
  res = 0;
  arr.forEach((item) => {
    res += item;
  })
  return res;
}

// console.log(sum(colors));


function double(arr) {
  let c = [];

  for (let i = 0; i < b.length; i++) {
    c.push((b[i] * 2));
  }
    return c;
}

// using map
function double (arr) {
  let c = arr.map((item) => {
    return (item * 2);
  })
  return c;
}

// console.log(double([3, 4, 9]));
// console.log(***********************************************)

let products = [

{name : "a", type: 'veg', quant: 0, price: 1},
{name : "b", type: 'fruit', quant: 10, price: 15},
{name : "d", type: 'veg', quant: 30, price: 13},
{name : "e", type: 'fruit', quant: 3, price: 5}

];

filteredProducts = [];


products.forEach((item) => {

  if (item.type === 'veg') {
    filteredProducts.push(item);
  }
  return filteredProducts;
  
})

filteredProducts = products.filter((item) => item.type === 'veg');

// console.log(filteredProducts);
// console.log(***********************************************)

quant > 0 && price < 15 

filteredProducts = products.filter((item) => (item.quant > 0 && item.price < 15 && item.type === 'veg'));

products.forEach((item) => {

  if (item.type === 'veg' && item.quant > 0 && item.price < 15) {
    filteredProducts.push(item);
  }
  return filteredProducts;  
})

console.log(filteredProducts);

var post = {id: 4, content: 'New comment'};

var comments = [
 {postId: 4, content: 'awesome'},
 {postId: 3, content: 'nice'},
 {postId: 4, content: 'neat'}
];
// console.log(***********************************************)

var filteredPost = [];

comments.forEach((item) => {

  if (item.postId === post.id) {
    filteredPost.push(item);
  }
  return filteredPost;  
});

// ES6 way
filteredPost = comments.filter((item) => (item.postId === post.id));

// console.log(filteredPost);

// console.log(***********************************************)

var users = [
{ name : "ram"},
{ name : "ram"},
{ name : "steve"},
{ name : "bill"}
];

filteredUsers = [];

users.forEach((item) => {
  if(item.name === 'ram') {
    filteredUsers.push(item);
  }

  return filteredUsers;
})

console.log(filteredUsers);

