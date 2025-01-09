let fruits = ["Banana", "Orange", "Apple", "Mango"];

// toString() and join()

//console.log(fruits.toString());
console.log(fruits.join("*"));

// pop() method is used to remove the last element in the array.
console.log(fruits.pop());
console.log(fruits)


// push() method is used to add new element to the array.
console.log(fruits.push("Kiwi"));
console.log(fruits);

// shift() method will remove the first element in the array 
fruits.shift();
console.log(fruits)

// unshift() method will add new elemen in the beginning of the array
fruits.unshift("Lemon");
console.log(fruits);

// Deleting elements from array
delete fruits[1];
console.log(fruits);

//concatenate 
let arr1 = [10, 20 ,];
let arr2 = ["A", "B"];
let arr3 = ["x" , "y"];
console.log(arr1.concat(arr2,arr3)); 

//slice() method is used to add new array with deleting the original elements of the array
console.log(fruits.slice(2));

// sort()
console.log(fruits.sort());

// reverse()
console.log(fruits.reverse());