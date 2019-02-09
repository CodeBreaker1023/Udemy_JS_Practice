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
// var whatDoYouDo = function(job, firstName){
//     switch(job) {
//         case 'teacher':
//             return firstName + ' teaches kids how to code.';
//             //No break needed because return completes the function
//         case 'driver':
//             return firstName + ' drives an Uber in Lisbon.';
//         case 'designer':
//             return firstName + ' designs webpages.';
//         default:
//             return firstName + ' does something else.';
//     }
// }

// console.log(whatDoYouDo('teacher', 'John'));
// console.log(whatDoYouDo('retired', 'Mike'));
// console.log(whatDoYouDo('teacher', 'Mary'));

/* ********* ARRAYS ************** */

// Initialize new array
var names = ['John', 'Mike', 'Mary'];
var years = new Array (1990, 1948, 1969);

console.log(names);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Jane';
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'teacher', false];

// .push adds item to end of array
john.push('blue');
// .unshit adds item to the beginning of an array
john.unshift('Mr.');
console.log(john);

// .pop removes the last item of an array
john.pop();
john.pop();
// .shift removes the first item of an array
john.shift();
console.log(john);

// indexOf identifies the position of item in an array; it will return -1 if not present
console.log(john.indexOf(1990))

// ? = then, : = else
// If 'designer' is not present in the array then (?) 'John is NOT a designer' else (:) 'John IS a designer'
var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);    