class Test {
    static a = 10; // static variable
    b = 20; // Non-static variable

    static m1() {
        console.log("This is m1 --> Static method....")
    }

    m2() {
        console.log("This is m2 --> Non-Static method....")

    }
}

// We can directly access static variables and methods using class name. 
console.log(Test.a);
Test.m1();

// We can access non-static methods and variables by creating object from the class. 
let Object = new Test();
console.log(Object.b);
Object.m2();
