console.log('Anurag');

// practice sync and  async code----

// function sync(){                            // example of sync code
//     console.log('first');
// }
// sync();

// console.log('second');

//-----------------------------------------------------------------------------------------
// Async Code

// setTimeout(function(){                               // setTimeOut is async  Code
//     console.log('third');
// },2000);                          

// function sync(){                          
//     console.log('first');
// }
// sync();
// console.log('second');

//----------------------------------------------------------------------------------------------------
// Promise - executing parallely

// let mypromise1 = new Promise(function(resolve, reject){       // callback function()
//     setTimeout(function(){
//         console.log('I am inside promise1 ');
//     },2000);
//     // resolve(1998);
//     // reject(new Error('error aa gya hai '));
// }); 

// let mypromise2 = new Promise(function(resolve, reject){       // callback function()
//     setTimeout(function(){
//         console.log('I am inside promise2 ');
//     },3000);
//     // resolve(1998);
//     // reject(new Error('error aa gya hai '));
// }); 

// console.log('Pehla');

//---------------------------------------------------------------------------------------
// Promise part 2 : using then and catch 

let mypromise1 = new Promise(function(resolve, reject){       // callback function()
    setTimeout(function(){
        console.log('I am inside promise1 ');
    },2000);

    // resolve(2233);                     // we marked it as fulfilled 
    reject(new Error('error aa gya hai '));
});
// mypromise1.then((value) => {console.log(value)});                                // arrow func use
// mypromise1.catch((error) => {console.log('Recieved an error')});     

// single line for both above
mypromise1.then((value) => {console.log(value)}, (error) => {console.log('Recieved an error')});         

//--------------------------------------------------------------------------------------------
// how multiple promises will work :

