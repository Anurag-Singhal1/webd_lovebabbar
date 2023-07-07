console.log('lets start basic 3 arrays');

//  array creation
let numbers = [1,2,3,4];
console.log(numbers);

// insertion at begining, end and middle
// numbers.push(5);    // begin
// console.log(numbers);
// numbers.unshift(0);     // start
// console.log(numbers);
// numbers.splice(2,0,'a','b','c');      // inserting index, count of numbers to delete, values to insert
// console.log(numbers);

// SEARCHING
console.log(numbers);
console.log(numbers.indexOf(3));
console.log(numbers.indexOf(5));      // -1 bcz not present
console.log(numbers.includes(4));
console.log(numbers.indexOf(2,2));  // searching  number, index where we start searching


// now do : array of objects
let courses = [
    {no:1, name:'anurag'},
    {no:2,name:'singhal'}
];
console.log(courses);
console.log(courses.indexOf({no:1, name:'anurag'})); //-1, bcz both 2 r different objects (on differrent addresses). hence, indexof() not works in objects.
console.log(courses.includes({no:1, name:'anurag'})); //-1, bcz both 2 r different objects. hence, includes() also not works in objects.

//  so, in objects/refereences we use callback() functions

// let course = courses.find(function(course){
//     return course.name == 'anurag';
// })
let course = courses.find(course=> course.name == 'anurag');  // by using arrow() function
console.log(course);


// REMOVING ELEMENT : 3 WAYS - END, BEIGN , MIDDLE
// let number = [1,2,3,4,5,6,7];
// number.pop();                         // removing from end
// console.log(number);
// number.shift();                    // removing from starting
// console.log(number);
// number.splice(2,1);               // from 2nd index, number of values to be deleted
// console.log(number);


// EMPTYING AN ARRAY
let number = [1,2,3,4,5,6,7];
let number2 = number;
// number = [];
// number.length = 0;                   // 1st way - best practice
number.splice(0,number.length);          // 2nd way by using splice() func
console.log(number);
console.log(number2);


// COMBINING AND SLICING ARRAYS : for combining- concat() func  and slice() func for slicing
// here we do combining and slicing on primitives and on objects remaining.....

// let first  = [1,2,3];
// let second  = [4,5,6];
// let combined = first.concat(second);
// console.log(combined);
// // let sliced = combined.slice(2,4);              // x & y both index range [x,y) : x is included but not y
// // let sliced = combined.slice();                  // copy created : full slicing
// let sliced = combined.slice(2);                 // 2 index se aage tak
// console.log(sliced);


// spread operator : used for combining : 2nd way after concat()
// let first  = [1,2,3];
// let second  = [4,5,6];
// let combined = [...first, ...second];
// let combined = [...first, 'a',0,'s', ...second,'z', true];         // also can put in b/w
// console.log(combined);
// copy can also be created
// let another = [...combined];
// console.log(another);


// ITERATING AN ARRAY : for-of loop for iterables      & also for-each loop
// let arr = [10,20,30,40,50];
// for(let value of arr){
//     console.log(value);
// }

// arr.forEach(function(number){
//     console.log(number);
// });

// now by arrow function
// arr.forEach(number => console.log(number));


// JOINING ARRAYS :
// let arr = [10,20,30,40,50];
// let joined = arr.join(',');
// console.log(joined);         // 10,20,30,40,50

// split() : string method
// let message = 'This is my first message';
// let parts = message.split(' ');
// console.log(parts);               // so, a created by this split() method.
// // joining again
// // let joined = parts.join(' ');
// // let joined = parts.join('');
// let joined = parts.join('_');
// console.log(joined);    


// SORTING ARRAYS :
// let arr = [30,50,10,40,20];      // on numbers : primitives : take as string. for numbers again by predicate
// arr.sort();
// console.log(arr);
// arr.reverse();
// console.log(arr);
// sorting for objects : again by predicate func()


// FILTERING ARRAYS :
// let arr = [1,2,-1,4,-5,-10,8]; 
// let x = arr.filter(function(value){
//     return value < 0 ;
// });
// console.log(x);


// MAPPING ARRAYS :
// let arr = [10,20,30,40,50];
// let items = arr.map(function(x){   // we  write value instead of x just for convention.
//     return 'StudentNO '+ x;
// });
// console.log(items);

// MAPPING WITH OBJECTS :
let arr = [1,2,-1,4,-5,-10,8];
let filtered = arr.filter(value => value>=0);
let items = filtered.map(function(num){
    return {value:num};
});
// let items = filtered.map(num => {value: num});
console.log(items);
// CHAINING : MERGING 2 OR MORE ARROW FUNCTIONS.
// let items = arr 
//             .filter(value => value>=0)
//             .map(num => {value:num});