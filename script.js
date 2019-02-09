/* ************* FUNCTIONS ************** */
// function calculateAge(birthYear) {
//     return 2018 - birthYear;
// }

// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1948);
// var ageMary = calculateAge(1969);
// console.log(ageJohn, ageMike, ageMary);

// function yearsUntilRetirement(year, firstName){
//     var age = calculateAge(year);
//     var retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(firstName + ' retires in ' + retirement + ' years.')  
//     } else {
//         console.log(firstName + ' is already retired.')
//     }
    
// }

// yearsUntilRetirement(1990, 'John');
// yearsUntilRetirement(1948, 'Mike');
// yearsUntilRetirement(1969, 'Mary');

/* ********Function statements and Expressions ********* */

// Function statements - produce actions and not immediate results e.g. if/else, while loop

//Function declaration 
// function whatDoYouDo = function(job, firstName) {}

//Function expression - are pieces of code that always produce a value
var whatDoYouDo = function(job, firstName){
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code.';
            //No break needed because return completes the function
        case 'driver':
            return firstName + ' drives an Uber in Lisbon.';
        case 'designer':
            return firstName + ' designs webpages.';
        default:
            return firstName + ' does something else.';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('retired', 'Mike'));
console.log(whatDoYouDo('teacher', 'Mary'));