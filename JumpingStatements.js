// Break 

console.log("Break Statement")
for (i = 1; i <= 10; i++) {

    if (i == 5)
        break;
    {
        console.log(i);
    }
}

console.log("Continue Statement")
for (i = 1; i <= 10; i++) {

    if (i == 5)
        continue;
    {
        console.log(i);
    }
}

console.log("Continue Statement 2")
for (i = 1; i <= 10; i++) {

    if (i == 3 || i == 5 || i == 9)
        continue;
    {
        console.log(i);
    }
}