console.log('chaliye shuru karte hain');

// object create

// let rectangle ={
//     length: 1,
//     breadth: 2,

//     // beahviour is added through function
//     draw: function(){
//         console.log('drawing rectangle');
//     }
// };


// factory function : create an object and return that
function createRectangle(len,bre) {
    return rectangle ={
        // len,             // direct by this way also
        // bre,
        length: len,    // to take input from user
        breadth: bre,

        draw(){
            console.log('drawing rectangle');
        }
    };
    // return rectangle;   // instead of this, we can even put return in starting line in place of let.
}
// Creating an object by using factory function :
let rectangleObj1 = createRectangle(5,4);
let rectangleObj2 = createRectangle(2,3);
let rectangleObj3 = createRectangle(51,101);


// construction function : another way of creating objects - here pascal notation
// construction function : properties/methods -> initialise/define. here we dont return.
function Rectangle(len,bre){
    // this.length =10 ;
    // this.breadth =20;
    this.length = len;
    this.breadth = bre;
    this.draw = function(){
        console.log('drawing');
        console.log(this.length);
    }
}

// object creation using constructor function
let rectangleObject = new Rectangle(5,10);
rectangleObject.color = 'yellow';       // adding new property
console.log(rectangleObject);
delete rectangleObject.color;           // deleting that newly added property
console.log(rectangleObject);


//IMP CONCEPT : function is also an object in javascript. and every object has an construcor. 
// automatically hota hai, no need to think more. just internal things
let Rect = new Function(   // internally Function() creates our Rectangle construction function likes this.
    'length','breadth',
`this.length = length;
this.breadth = breadth;
this.draw = function(){
    console.log('drawing');
    console.log(this.length);
}`);

// object creation using Rect
let obj = new Rect(11,21);
console.log(obj);

//--------------------------------------------------------------------------------------------

// primitive datatypes  vs reference types (objects - functions, objects, arrays)
// let a =10;
// let b = a;
// a++;
// console.log(a);  //11
// console.log(b);  //10

let a ={value :10};       // object datatype
let b=a;
a.value++;
console.log(a.value);
console.log(b.value);
