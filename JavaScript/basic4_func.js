console.log('lets start basic4 with functions');

// function declaration
function run(){
    console.log('running');
}
// function call or invoke
run();

// Named function assignment
let stand = function walk(){
    console.log('Walking');
};
stand();
// Anonymous function assignment
let stand2 = function() {
    console.log('Standing');
};
stand2();

let jump = stand;
jump();

//----------------------------------------------------------------------------

function sum(a,b){
    let total = 0;
    for(let value of arguments){
        total = total + value ;
    }
    return total;
    // console.log(arguments);
    // return a+b;
}
// console.log(sum(3,19));
// console.log(sum(3));
// console.log(sum());
// console.log(sum(1,2,3,4,5,5));

let ans = sum(1,2,3,4,5);
console.log(ans);

// rest operator : top handel all the parameters by rest operator
function sum(num,value,...args){
    console.log(args);
}
sum(1,2,3,4,5,6);      // all stored inside an array : args as variable

// default parameters
function interest(p,r=6,y=10){
    return p*r*y/100 ;
}
console.log(interest(1000,8));

//        GETTER AND SETTER :
//   getter -> access propereties   (by get ketword)
// setter -> change properties
let person = {
    fName : 'Anurag',
    lName : 'Singhal',
    get fullName(){       // read-only function
        return `${person.fName}   +   ${person.lName}`;         // + sign : just for fun
    },
    set fullName(value){
        if(typeof value !== String){
            throw new Error('You have not sent a string');
        }
        let parts = value.split(' ');
        this.fName = parts[0];
        this.lName = parts[1];
    }
};
// console.log(person);
console.log(person.fullName);
// person.fullName = 'Rahul Kumar';      // Rahul Kumar is value for setter fullName    
// console.log(person.fullName);

// function fullName(){       // read-only function
//     return `${person.fName}  ${person.lName}`;
// }
// console.log(fullName());

//------------------------------------------------------------
// TRY AND CATCH :
// try{
//     person.fullName = true;
// }
// catch (e) {
//     //alert('You have sent a number in fullName');
//     alert(e); // throw wali error idhar e mein store ho jaayegi.
// }
// console.log(person.fullName);

//----------------------------------------------------------------------------
// SCOPE : var vs let

// {
//     let x = 'a';         // let wala sirf inside {}
//     var y = 'b';
// }
// console.log(y);
// console.log(x);

// function walk(){
//     var x = 'a';
// }
// console.log(x);

// for(var i=0;i<5;i++){}
// console.log(i);

// ------------------------------------------------------------------------------------
// REDUCING THE ARRAY : by reduce() method
let arr = [1,2,3,4];
// let total = 0;

// for(let value of arr){
//     total = total + value;
// }
// console.log(total);

let totalSum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);  // initial value of accumulator is 0
console.log(totalSum);