// These are the two syntaxs that can be used to do Arrays:

//1- let cars = ["Volvo" , "BMW" , "Mercedes"]
//2- 
//let cars = new Array("Volvo", "BMW", "Mercedes")

//console.log(cars[2])

// Updating one of the values inside the array.
//cars[0] = "Honda";
//console.log(cars[0]);

//let info = [100, "Joe", 10.15, true];

//console.log(info)

//let Employee1 = { EmpName: "Yousef", EmpAge: 29 };
//let Employee2 = { EmpName: "Ali", EmpAge: 27 };

//let EmployeesInfo = [Employee1 , Employee2]
//console.log(EmployeesInfo);

// for Loop
let numbers = [1, 2, 3, 4, 5];
/* for(i=0; i<=numbers.length-1; i++)
{
    console.log(numbers[i]);
} */

// for/of loop
for(ele of numbers)
    {
        console.log(ele);
    } 