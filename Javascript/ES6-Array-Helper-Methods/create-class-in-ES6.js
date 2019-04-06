class User {

	constructor (name, age) {
		this.name = name;
		this.age = age;
	}

	getUserData() {
		console.log(this.name + " is " + this.age + " years old.");
	}
}

let user = new User('paul', 18)
user.getUserData()