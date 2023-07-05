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


//IMP CONCEPT : function is also an object in javascript. and every object has a construcor. 
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

// let a =10;        // a is number here i.e, primitive
// let b = a;
// a++;
// console.log(a);  //11
// console.log(b);  //10

let a ={value :10};       // object datatype. hence, a and b both points to same address.
let b=a;
a.value++;
console.log(a.value);       //11
console.log(b.value);      //11

let x = 10;
function inc(x){   // x is primitive so copy created here.
    x++;
}
inc(x);
console.log(x);               //10

let y = {value:10};  // y is object here i.e, references. so, in same address
function incre(y){
    y.value++;
}
incre(y);
console.log(y.value);       //11

//-------------------------------------------------------------------------------------
// for-in loop  : iterating through objects
let kite = {         // kite is an object
    length:2,    //key-value pair
    breadth:4
};
for(let key in kite){
    // keys are reflected through key variable
    // values are reflected through kite[key]
    console.log(key,kite[key]);
}

// for-of loop : for iterables (arrays, maps) and not on objects(but through a hack)
for(let key of Object.keys(kite)){        // array formed of keys
    console.log(key);
}
for(let key of Object.entries(kite)){        // array formed of entries (key,value) both.
    console.log(key);
}

//  to check whether a property is absent or present in object
if('length' in kite){
    console.log('Present');
}else{
    console.log('Absent');
}

// OBJECT CLONING : to create a copy of the object
// 1st way : by iteration
let src ={
    a:10,
    b:20,
    c:30
};
let dest = {};        // empty object
for(let key in src){
    dest[key] = src[key];
}

// 2nd way : by assign function
let src2 = {value:101};          // we cAN even copy multiple objects by assign() function.
let desti = Object.assign({},src, src2);

//3rd way : by spread operator
let destin = {...src};

console.log(dest);
src.a++;         // no effect of this. hence, we successfully cloned.
console.log(desti);
desti.b++;       // no effect. hence cloned. copy created
console.log(destin);

