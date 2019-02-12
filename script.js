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
// var names = ['John', 'Mike', 'Mary'];
// var years = new Array (1990, 1948, 1969);

// console.log(names);
// console.log(names.length);

// // Mutate array data
// names[1] = 'Ben';
// names[names.length] = 'Jane';
// console.log(names);

// // Different data types
// var john = ['John', 'Smith', 1990, 'teacher', false];

// // .push adds item to end of array
// john.push('blue');
// // .unshit adds item to the beginning of an array
// john.unshift('Mr.');
// console.log(john);

// // .pop removes the last item of an array
// john.pop();
// john.pop();
// // .shift removes the first item of an array
// john.shift();
// console.log(john);

// // indexOf identifies the position of item in an array; it will return -1 if not present
// console.log(john.indexOf(1990))

// // ? = then, : = else
// // If 'designer' is not present in the array then (?) 'John is NOT a designer' else (:) 'John IS a designer'
// var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
// console.log(isDesigner);    

// // TIP CALCULATOR CHALLENGE 

// function calculateTip (bill) {
//     var percentage;
//     if (bill < 50) {
//         percentage =.2;
//     }
//     else if (bill >=50 && bill <= 200) {
//         percentage =.15;    
//     } else {
//         percentage=.1;
//     }
//     return percentage * bill;
// }

// var bills = [124, 48, 268];
// var tips = [calculateTip(bills[0]), calculateTip(bills[1]), calculateTip(bills[2])];
// var totalBill = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips [2]];
// console.log(tips)
// console.log(totalBill);

/* *********** Objects and properties ************* */

// Object literal
// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false
// };

// console.log(john.firstName);
// console.log(john['lastName']);
// var x = 'birthYear';
// console.log(john[x]);

// john.job = 'designer';
// john['isMarried'] = true;
// console.log(john);

// var jane = new Object();
// jane.firstName = 'Jane';
// jane.birthYear = 1969;
// jane['lastName'] = 'Smith';
// console.log(jane);


// /* *********Objects and Methods ************ */

// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false,
//     calculateAge: function(birthYear) {
//         return 2019 - this.birthYear; // this refers to the object, in this case john
//         // this.age = 2018 - this.birthYear <-- is another way to write this
//     }
// };

// console.log(john.calculateAge(1990));
// john.age = john.calculateAge();

// /* ******* BMI OBJECT CHALLENGE *********** */
// var john = {
//     fullName:'John Smith',
//     mass: 90,
//     height: 1.8,
//     calcBMI: function() {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// }

// var mark = {
//     fullName:'Mark Morrison',
//     mass: 110,
//     height: 2.2,
//     calcBMI: function() {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// }

// john.calcBMI();
// mark.calcBMI();
// console.log(john, mark);

// if (john.bmi > mark.bmi) {
//     console.log(john.fullName + ' has a higher BMI at ' + john.bmi + '.')
// } else if (mark.bmi > john.bmi) {
//     console.log(mark.fullName + ' has a higher BMI at ' + mark.bmi + '.')
// } else {
//     console.log('Mark and John have the same BMIs.')
// }
 
// /* ******** Loops and Iterations ********** */

// for (var i=0; i < 10; i++) {
//     console.log(i);
// }

// var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
// for (var i = 0; i < john.length; i++) {
//     console.log(john[i]);
// }

// // While loop
// var i = 0;
// while(i < john.length) {
//     console.log(john[i]);
//     i++;
// }

// Continue and Break statements
// var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
// for (var i = 0; i < john.length; i++) {
//     if (typeof john[i] !== 'string') continue;
//     console.log(john[i]);
// }

// for (var i = 0; i < john.length; i++) {
//     if (typeof john[i] !== 'string') break;
//     console.log(john[i]);
// }

// Looping backwards
// for (var i = john.length - 1; i >= 0; i--) {
//     console.log(john[i]);
// }

/* ****** Tip Calculator Challenge Part 2 ******* */

// var john = {
//     fullName: 'John Smith',
//     bills: [124, 48, 268, 180, 42],
//     calculateTip: function () {
//         this.tips = [];
//         this.totalBills = [];

//         for (var i = 0; i < this.bills.length; i++) {
//             // Determine percentage base on tipping rules
//             var percentage;
//             var bill = this.bills[i];

//             if (bill < 50) {
//                 percentage =.2;
//             }
//             else if (bill >=50 && bill <= 200) {
//                 percentage =.15;    
//             } else {
//                 percentage=.1;  
//             }

//             // Add results to corresponding arrays
//             this.tips[i] = bill * percentage;
//             this.totalBills[i] = bill + bill * percentage;
//         }
//     }
// }

// var mark = {
//     fullName: 'Mark Morrison',
//     bills: [77, 475, 110, 45],
//     calculateTip: function () {
//         this.tips = [];
//         this.totalBills = [];

//         for (var i = 0; i < this.bills.length; i++) {
//             // Determine percentage base on tipping rules
//             var percentage;
//             var bill = this.bills[i];

//             if (bill < 100) {
//                 percentage =.2;
//             }
//             else if (bill >=100 && bill <= 300) {
//                 percentage =.1;    
//             } else {
//                 percentage=.25;  
//             }

//             // Add results to corresponding arrays
//             this.tips[i] = bill * percentage;
//             this.totalBills[i] = bill + bill * percentage;
//         }
//     }
// }

// function calcAverage(tips) {
//     var sum = 0;
//     for (var i = 0; i < tips.length; i++) {
//         sum = sum + tips[i];
//     }
//     return sum / tips.length;
// }


// john.calculateTip();
// mark.calculateTip();

// john.average = calcAverage(john.tips);
// mark.average = calcAverage(mark.tips);
// console.log(john, mark);

// if (john.average > mark.average) {
//     console.log(john.fullName + '\'s family pays higher tips with an average of $' + john.average);
// } else if (mark.average > john.average) {
//     console.log(mark.fullName + '\'s family pays higher tips with an average of $' + mark.average);
//     }

///////////////////////////////////////
// Lecture: Hoisting

// *** Hoisting ONLY works for Function Declarations
// This code below will execute because it's a function declaration
// calculateAge(1965);

// function calculateAge(year) {
//     console.log(2016-year);
// }


// // *** This a function expression
// // The code below will not execute because hoisting is not applied to expressions
// // retirement(1965);

// var retirement = function (year) {
//     console.log(65 - (2016 - year));
// }

// // variables
// console.log(age);
// var age = 23; 

// function foo() {
//     console.log(age);
// }

// foo();
// console.log(age);

















///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword

calculateAge(1985);

function calculateAge(year){
    console.log(2016);
    console.log(this);
}

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2016-this.yearOfBirth);

        function innerFunction() {
            console.log(this);
        }
        innerFunction();
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

// Method borrowing

mike.calculateAge = john.calculateAge;
mike.calculateAge();





