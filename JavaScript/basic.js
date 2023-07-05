// this line prints on  the console of browser
console.log('Namaste Duniya Version-1');

// variable creation

// let a = 11;
// let a ='Anurag';
let a = true;
console.log(a);

// constant variable value cant be changed
const num = 12;
// num = 13;           // shows error

// dynamic typing : we can even change the datatype, bcz let take care of that
let lastName = 'Anurag';
console.log(lastName);
lastName = 5;
console.log(lastName);

//comparator operator
console.log(5 === 5);
console.log(5 !== 5);

// ternary operator
let age = 17;
let status = (age>=18) ? 'Can vote' : 'No Vote';
console.log(status);

// non-booleans
console.log(true || false);
console.log(false || false);
console.log(false || 'Anurag');
console.log(false || 5);
console.log(false || 0);
console.log(false || 10 || 8);        // short-circuiting : pehli truthy value ke baad aage no check
console.log(false && 5);
console.log(false && 0);

// for loop
for(let i=0;i<5;i++){
    console.log('Anurag '+i);
}
// while loop
let x =1;
while(x<=10){
    // let y = x++;
    // console.log(y);
    console.log(x++);
}


