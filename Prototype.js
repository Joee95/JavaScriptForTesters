// Prototype is an object that is associated with every function and object by default.
// If we want to add new properties at later stages to a function/class, we can take the help of prototype. 

// Prototype with function.
function Student() {
    this.name = "Yousef"
    this.gender = "Male";
}

Stu1 = new Student();
/* console.log(Stu1.name);
console.log(Stu1.gender); */

// Prototype
Stu2 = new Student;
Stu2.age = 29;

console.log(Stu2.name, Stu2.gender, Stu2.age);

// Prototype with class.
class Employee
{
    constructor(eid, ename)
    {
        this.eid = eid;
        this.ename = ename;
    }
}

// Prototype
Employee.prototype.sal = 50000;

emp1obj = new Employee(101, "David");
console.log(emp1obj.eid, emp1obj.ename, emp1obj.sal);
