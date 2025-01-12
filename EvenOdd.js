let x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (i = 0; i < x.length; i++) {
    if (i % 2 === 0)
        console.log("The even numbers are: " + x[i]);
    else
        console.log("The odd numbers are: " + x[i]);
}