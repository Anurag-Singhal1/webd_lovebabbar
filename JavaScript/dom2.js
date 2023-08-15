console.log('Namaste Duniya Version-1');        // prints on the console of browser

// Dom class 2 : hree we talk about performance

//-----------------------------------------------------------------------------------------------
// adding 100 para

// const t1 = performance.now();
// for(let i=1;i<=100;i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para ' + i;

//     document.body.appendChild(newElement);
// }
// const t2 = performance.now();
// console.log('this took ' + (t2-t1) + ' ms');

//----------------------------------------------------------------------------------------------
// optimising above code

// const t3 = performance.now();
// let myDiv = document.createElement('div');

// for(let i=1;i<=100;i++){
//     let element = document.createElement('p');
//     element.textContent = 'This is para ' + i;

//     myDiv.appendChild(element);
// }
// document.body.appendChild(myDiv);
// const t4 = performance.now();
// console.log('this took ' + (t4-t3) + ' ms');

//--------------------------------------------------------------------------------------------------
// now 3rd way of optimising, using fragments :

// let fragment = document.createDocumentFragment();

// for(let i=1;i<=100;i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para ' + i;

//     fragment.appendChild(newElement);
// }
// document.body.appendChild(fragment);                // 1 Reflow, 1 Repaint

//---------------------------------------------------------------------------------------------
// single-threading concept :- line by line executing

// function addPara(){
//     let para = document.createElement('p');
//     para.textContent = 'Js is single-threaded language ';
//     document.body.appendChild(para);
// }

// function appendNewMessage(){
//     let para = document.createElement('p');
//     para.textContent = 'kya haal-chaal ';
//     document.body.appendChild(para);
// }

// addPara();
// appendNewMessage();

//----------------------------------------------------------------------------------------
// settimeout()

setTimeout(function(){
    console.log('Hello Guys!');               // 5 second baad console mein print ho jaayega 
},5000);