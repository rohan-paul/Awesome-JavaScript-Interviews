/* Write a function func1 which will call another function func2 as a object property. Tat is I should be able to run func1()func2() .

The purpose of this exercise is to understand how most of the function calls work in node.js. Like the below one

var http = require('http');
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type' : 'text/plain'});
	res.write('Hello World');
	res.end();
}).listen(3000);


And in the above, what exactly is happening is -

http.createServer().listen();

Where http is an object, and I am chaining createServer() and listen() to that

*/

function func1() {
	return {
		func2: () => {
			console.log("Inside func2");
			return {
				func3: () => {
					console.log("Inside func3");
				}
			}
		}
	}
}

func1().func2().func3();