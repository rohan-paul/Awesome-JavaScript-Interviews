##Inheritance

Inheritance is the mechanism of creating a new class(child class) from another class (parent class). Inherited class inherits all the methods of parent class.

Lets see how to inherit a class from another class

```js
/* Parent Class */
class ParentClass
{
   constructor(properties){
     this.properties = properties;
     }
   getMothod(){return this.properties};
   methods(){}
}

/*Inheriting class*/
class ChildClass extends ParentClass
{
    constructor(properties, classSpecificProperties)
     {
         super(properties);
         this.classSpecificProperties = classSpecificProperties
     }
    super.getMethod();
    classSpecificeMethods(){}
}

let childClassObject = new ChildClass(properties, classSpecificProperties);

childClassObject.methods();

childClassObject.classSpecificeMethods();

```

### Points to note:

**super()** method is mandatory to call if we have declared a custom constructor for Child Class, else not required.

super is used to call Parent Class methods inside Child Class

Child class will have access to all parent class methods.

**this** will always point to current object


### Another example

```js
/*Parent Class*/
class Vehicle {
     constructor(name, model) {
               this.name = name;
               this.model = model;
             }
       showModel() {
              console.log(this.model);
           }
        getModel() {
               return this.model;
           }
        getName() {
               return this.name;
            }
 }
/*Child Class inheriting parent class*/
class FourWheelers extends Vehicle {
          constructor(name, model, noOfSeats) {
                  super(name, model);
                  this.noOfSeats = noOfSeats;
              }
          showNoOfSeats() {
                console.log(super.getName() + super.getModel() + "has " + this.noOfSeats + "seats");
          }
 }
 
/*Creating Child class object*/
let myCar = new FourWheelers("Audi", "R8", 5);
myCar.showNoOfSeats();          // Child Class method
myCar.showModel();              // Parent class method
```