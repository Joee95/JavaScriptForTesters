let Participant = {
    FirstName: 'Yousef',
    LastName: 'Kenawy',
    Age: 29,
    JobTilte: "QC engineer",
    Born: "Riyadh - Saudi Arabia",
    Countryofresidence: "Cairo - Egypt",
    Salary: 5000,
    Bonus: function NetSalary() 
    {
        return ((this.Salary * 10) / 100);
    }
};

// Accessing Object Properties
/*console.log(Participant);
//console.log(Participant.FirstName);
console.log(Participant["FirstName"])
*/

// Add New Property
//Participant["Country of residence"] = "Cairo - Egypt"
//console.log(Participant);

//Update Property
//Participant.FirstName = "Ali"
//console.log(Participant);

// For/in loop
/*
for (let x in Participant) {
    //console.log(x);
    //console.log(Participant[x])
    console.log(x + "  -->  " + Participant[x]);
}
*/

// Invoke the function from inside the Object's properties
console.log(Participant.Bonus());