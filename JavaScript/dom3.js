console.log('Hello World!');

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

// let mypromise1 = new Promise(function(resolve, reject){       // callback function()
//     setTimeout(function(){
//         console.log('I am inside promise1 ');
//     },2000);

//     // resolve(2233);                     // we marked it as fulfilled 
//     reject(new Error('error aa gya hai '));
// });

// mypromise1.then((value) => {console.log(value)});                                // arrow func use
// mypromise1.catch((error) => {console.log('Recieved an error')});     

// single line for both above
// mypromise1.then((value) => {console.log(value)}, (error) => {console.log('Recieved an error')});         

//--------------------------------------------------------------------------------------------
// how multiple promises will work : (these promises will depend on each other)

// let wada1 = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log('setTimeout 1 started ');
//     }, 2000);
//     resolve(true);                            // idhar hum true ki jgah kuch bhi value de skte hai -> 0/'abc'
// }); 

// let output =  wada1.then(()=> {
//     let wada2 = new Promise(function(resolve, reject){
//         setTimeout(() => {
//             console.log('setTimeout 2 started '); 
//         }, 3000);
//         resolve('Wada 2 resolved');
//     });
//     return wada2;
// });
// output.then((value) => console.log(value));   //idhar hum kuch bhi likh skte, value over-ride ho jaayegi

//--------------------------------------------------------------------------------------------
// use of async and await function -

// async function abcd(){
//     // return 7;
//     return 'hello brdr';
// }
// console.log(abcd());

//--------------------------------------------------------------------------------
// more practice 

// async function mausam(){
//     let delhimausam = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Delhi mein bhot garmi haii');
//         }, 4000);
//     });
    
//     let hydmausam = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Hyderabad is cool ');
//         }, 8000);
//     });

//     let dM = await delhimausam;             // next line execute nhi hogi, jb tk ye line execute nhi ho jaati
//     let hM = await hydmausam;           

//     return [dM,hM];
// }
// console.log(mausam());

//-------------------------------------------------------------------------------------
// Fetch API - get call (only url)

// let obj = {                    // no use of this here ->  json is similar like object
//     heading : 'head',
//     val : 123
// };

// async function utility (){                           // utility is our function name, kuch bhi rkh skte hai
//     let content = await fetch('https://jsonplaceholder.typicode.com/posts/1');      // network call
//     let output = await content.json();                                       // context.text() bhi kr skte
//     console.log(output);
// }
// utility();

//------------------------------------------------------------------------------------------
// post call - url , options object

// async function helper() {                                                // helper is fucntion name

//     let options = {                                  // creation of object  
//         method: 'POST',
//         body: JSON.stringify({                         // json format ko string mein convert kr deta haii
//           title: 'Anu',                 // below 3 fields are data, we are sending these to below url server
//           body: 'Tagdi Body',
//           userId: 2001,
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//     };

//     let content = await fetch('https://jsonplaceholder.typicode.com/posts', options);   // network call, await krna chahiye
//     let response = content.json();                     // converted into json format
//     return response;
// }

// async function utility(){
//     let ans = await helper();
//     console.log(ans);
// }
// utility();

//---------------------------------------------------------------------------------------
// Closures :  inner func + references

function init() {
    let name = "Anurag";                   // name is a local variable created by init

    function displayName() {                // displayName() is the inner function, that forms the closure
        // let name = 'Singhal';                     // it over-rides the above name. 
        console.log(name);                   // use variable declared in the parent function
    }
    return displayName;
}
let a = init();
a();
