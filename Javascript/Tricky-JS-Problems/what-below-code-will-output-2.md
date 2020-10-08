#### Q - What will be the output of the below code and why

![](assets/2020-10-08-17-02-25.png)

### Ans - The above code will output the following to the console:

![](assets/2020-10-08-17-02-51.png)

#### Explanation

In the outer function, both this and self refer to myObject and therefore both can properly reference and access foo.

In the inner function, though, this no longer refers to myObject. As a result, this.foo is undefined in the inner function, whereas the reference to the local variable self remains in scope and is accessible there.
