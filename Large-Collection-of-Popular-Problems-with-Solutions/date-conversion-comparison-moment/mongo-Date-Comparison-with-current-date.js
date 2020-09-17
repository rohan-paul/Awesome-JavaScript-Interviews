/* Problem Statement - I have to compare curent date-time with the one saved in mongo's ISO format for checking if a password-reset uid has expired. So if the 'resetPasswordExpires' is earlier than the current-time, I will consider that uid invalid. Normal checking was giving erroneous result. Here's the solution.

CAUTIONARY NOTE - WHILE THIS CODE WORKS PERFECTLY IN A STANDALONE .js FILE, I HAVE HAD FEW CASES WITHIN AN ACTUAL APP, WHERE IT FAILED TO WORK
 */

const actualMongoDB_data = [
		{
			"status" : "pending",
			"_id" : ObjectId("5c8fab3052373723e5a2a0f2"),
			"uid" : "2e55cc00-498a-11e9-85d3-3df872f29c7b",
			"resetPasswordExpires" : ISODate("2019-03-18T14:29:04.820Z")
		},
		{
			"status" : "pending",
			"_id" : ObjectId("5c8fab9c52373723e5a2a0f3"),
			"uid" : "6ea1e910-498a-11e9-85d3-3df872f29c7b",
			"resetPasswordExpires" : ISODate("2019-03-18T14:30:52.693Z")
		},
		{
			"status" : "pending",
			"_id" : ObjectId("5c8fabd6ec281d25536fb49f"),
			"uid" : "917be080-498a-11e9-ab80-5bd21f444459",
			"resetPasswordExpires" : ISODate("2019-03-18T15:31:50.665Z")
		},
		{
			"status" : "pending",
			"_id" : ObjectId("5c8fad500256be2611d28c54"),
			"uid" : "72f98df0-498b-11e9-8097-fd83c313130d",
			"resetPasswordExpires" : ISODate("2019-03-18T15:38:08.975Z")
		}
	]



let localCurrentTime = new Date(Date.now()).toLocaleTimeString('en-IN');

let mongoTime = new Date("2019-03-18T15:38:08.975Z").toLocaleTimeString('en-IN')

console.log(localCurrentTime);
console.log(mongoTime);

if (mongoTime < localCurrentTime) {
    console.log('LOWER');
} else {
    console.log('LATER');
}

// Reading - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
