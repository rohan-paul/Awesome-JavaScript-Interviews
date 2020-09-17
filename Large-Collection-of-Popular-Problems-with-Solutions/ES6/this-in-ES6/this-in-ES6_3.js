// Regular function binding to global object's this

function foo() {
    return console.log(this.a);        // global
}

foo.a = 'func';

global.a = 'global-variable';

// note in above, I can not use var a = 'global' in my node environment, but can do so in the chrome dev-tool environment. Remember, in browser the global object is window and in node its 'global'


foo();		// => global-variable

/*
The reason why above gave a console of global-variable, is because we mentioned earlier that this context for a function, is not decided by where it is declared, but by how and where it is called! Here, foo was called from the global context, and during its execution, this will be binded to the global object [Default binding rule], and since, regular functions and global object can only have this context, this context at the time of execution was pointing to the variable a declared in global scope, and hence the value was a was global and not func.

*/

// As expected and explained in ES_2.js file that below will output undefine, as arrow function does not have any this binding

var obj_1 = {
    a : 'object???',
    foo_1 : () => { console.log(this.a) }
};

obj_1.foo_1();		// undefined



// Now, wrapping arrow within a function, would make the regular function to bind the object's this.a value

var obj_2 = {
    
    a : 'object???',
    
    foo : function() {
        return (() => {
            console.log(this.a)
        })();
    }
};

obj_2.foo();  // object???

// 

