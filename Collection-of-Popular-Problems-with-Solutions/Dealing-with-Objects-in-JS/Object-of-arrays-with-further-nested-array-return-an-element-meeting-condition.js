// From the below object of arrays get the full single object with id === 2
const roles = {
	globalRoles: [
		{
			id: 1,
			shop_id: null,
			global: true,
			name: "owner"
		},
		{
			id: 2,
			shop_id: null,
			global: true,
			name: "admin"
		},
		{
			id: 3,
			shop_id: null,
			global: true,
			name: "super admin"
		}
	],
	customRoles: [
		{
			id: 4,
			shop_id: 1,
			global: false,
			name: "custom user 1"
		},
		{
			id: 5,
			shop_id: 1,
			global: false,
			name: "custom user 2"
		}
	]
};

const requiredData = Object.values(roles)
	.reduce((acc, arr) => acc.concat(arr), [])
	.find(role => role.id === 2);

console.log(requiredData);

// Output => { id: 2, shop_id: null, global: true, name: 'admin' }

/*Explanation 

Step A> The Object.values(roles) will return an array of values, which in this case will be 2 arrays as elements. As values are arrays here.
And they will be wrapped in anoteher array as Object.values return an array.

console.log(Object.values(roles));

Will return

[ [ { id: 1, shop_id: null, global: true, name: 'owner' },
    { id: 2, shop_id: null, global: true, name: 'admin' },
    { id: 3, shop_id: null, global: true, name: 'super admin' } ],
  [ { id: 4, shop_id: 1, global: false, name: 'custom user 1' },
    { id: 5, shop_id: 1, global: false, name: 'custom user 2' } ] ]


Step B> The reduce method will ONLY flatten the 2-d array generated in the first step

console.log(Object.values(roles).reduce((acc, arr) => acc.concat(arr), []));

Will return 

[ { id: 1, shop_id: null, global: true, name: 'owner' },
  { id: 2, shop_id: null, global: true, name: 'admin' },
  { id: 3, shop_id: null, global: true, name: 'super admin' },
  { id: 4, shop_id: 1, global: false, name: 'custom user 1' },
  { id: 5, shop_id: 1, global: false, name: 'custom user 2' } ]

Step C> Nnow only simple job left is to return the element with id === 1

*/

// console.log(requiredData);
