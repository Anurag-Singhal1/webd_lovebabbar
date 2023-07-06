console.log('lets start BASIC 2 remaining concepts about in-built objects');  

// IN-BUILT OBJECTS 
// 1. Math
console.log(Math.random());       // gives random number b/w 0-1
console.log(Math.random());
console.log(Math.PI);
console.log(Math.round(1.5));
console.log(Math.max(1,2,3,4));
console.log(Math.min(1,2,3,4));
console.log(Math.abs(2));
console.log(Math.abs(-2));

//2. String - 2 types : primitive and object string
let lastName = 'Singhal';        // primitive string
let firstName = new String('Anurag');  // String constructor is used to make string an object
console.log(typeof lastName);
console.log(typeof firstName);
// converting primitve string to of object type : by using dot ( . ) notation
console.log(lastName.length);
console.log(lastName[0]);
console.log(lastName.includes('ing'));
console.log(lastName.startsWith('Sin'));
console.log(lastName.startsWith('Anu'));
console.log(lastName.endsWith('al'));
console.log(lastName.indexOf('h'));
console.log(lastName.toUpperCase());
console.log(lastName.toLowerCase());
console.log(lastName.trim());    // trim the spaces in starting and ending
console.log(lastName.replace('Sin','aaa'));

let message = 'This is my first Message';
let words = message.split(' ');    // we split on basis of empty space ' '
console.log(words);
console.log(message.replace('first','second'));

// 3. TEMPLATE LITERAL : `  ` (back ticks: as it is likhega jaisa editor mein hoga. ex- mail as it is)

// let msg = 'My name \n is \n "Anurag" Singhal';
let msg = 'My name is \'Anurag \\Singhal';
console.log(msg);

let mail =                  // dynamic name inside ${}
`Hello ${lastName},                           

work hard, success will be yours.

Regards,
Anurag`;
console.log(mail);

// 4. DATE AND TIME : 5 ways
let date = new Date();
console.log(date);

let date2 = new Date('July 6 2023 01:00')
console.log(date2);

let date3 = new Date(2001, 7, 28, 6);
console.log(date3);

date3.setFullYear(2002);
console.log(date3);
console.log(date3.getFullYear());
