// strings 
// \n and ; show line breaks in most languages and count at 0
// -------------------- 

console.log("STRINGS\n\n\n");

console.log("A string with single quotes"); // Single quotes
console.log("A string with double quotes"); // Double quotes
console.log(`A string with back ticks`); // Back tick
console.log('A ' + 'string' + 'in ' + 'pieces'); // Concatenation

// NUMBERS
// -------------------- 

console.log("NUMBERS\n\n\n");

console.log(3); // number 
console.log(3 + 3); // add 
console.log(3 - 3); // subtract  
console.log(3 * 3); // multiply
console.log(3 / 3); // divide
console.log(10 % 3); // modulo

// STRINGS & NUMBERS
// -------------------- 

console.log('\n\nSTRINGS & NUMBERS\n\n\n'); 

console.log('100 * 50'); // numbers in a string 
console.log('100 * 50 equals ' + 100 * 50 ); // adding number to a string 
console.log(100 * 50 + '25'); // adding sting to a number 
console.log(`the year was ${2024-333} 333 years ago`) // template string 

// BOOLEAN
// -------------------- 

console.log('\n\nBOOLEENS\n\n\n');

console.log(true, false); // true and false 
console.log('3 < 4 :' , 3 < 4); // less than 
console.log('4 > 10 : ', 4 > 10); // greater than 
console.log('2 >= 2  ', 2 >= 2 ); // greater than or equal to 
console.log('6 <= 3', 6<= 3); // less than or equal to 
console.log('8 + 2 == 5 + 5 : ', 8 + 2 == 5 + 5); // equal to 
console.log("'tomato' != 'vegatable'", 'tomato' != 'tomato' ); // not equal to

// VARIABLES
// -------------------- 

console.log('\n\nVARIABLES\n\n\n'); 

var studentLoanDebt = 800; 
console.log('studentLoanDebt : ' , studentLoanDebt);

studentLoanDebt = studentLoanDebt - 100; 
console.log('studentLoanDebt : ' , studentLoanDebt);

studentLoanDebt = studentLoanDebt + 50; 
console.log('studentLoanDebt : ' , studentLoanDebt);

// ARRAYS
// -------------------- 

console.log('\n\nARRAYS\n\n\n'); 

var myFavouriteColors = ['yellowgreen', 'fuchsia', 'gainsboro']; 
console.log('myFavouriteColors : ', myFavouriteColors);
console.log('myFavouriteColors[1] :', myFavouriteColors[1]); 

// OBJECTS
// -------------------- 

console.log('\n\nOBJECTS\n\n\n'); 

var me = { 
    firstName: 'Bryant', 
    lastName: 'Wells',
    age: 33,
    likesMayo: false, 

};

console.log('me:', me); 
console.log( "me['firstName'] : ",  me['firstName'] ); // bracket notation 



// ARRAY OF OBJECTS
// -------------------- 

console.log('\n\n ARRAY OF OBJECTS\n\n\n'); 

var us = [
    {
        firstName: 'Karsyn', 
        lastName: 'Cardoza',
    },
    {
        firstName: 'Divyani', 
        lastName: 'Singh', 
    },
    {
        firstName: 'Qiwen', 
        lastName: 'Zhao',
    },
];

console.log(us);
console.log(us[0]);
console.log(us[0]['lastName']);