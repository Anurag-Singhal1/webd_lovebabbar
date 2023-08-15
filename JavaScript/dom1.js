console.log('Namaste Duniya Version-1');        // prints on the console of browser

// DOM Basics started - class 1 (1st vdo contains only theory, this is 2nd vdo of dom week)

//------------------------------------------------------------------------------------------
// document.addEventListener('click',function(){                 // this one is not a gud practice
//     console.log('I have clicked on the document');
// });


// function eventFunc(){                                        // separate function 
//     console.log('I have clicked the document');
// }
// document.addEventListener('click',eventFunc);

// document.removeEventListener('click',eventFunc);   // function jb bahar likha hoga, tbhi remove hoga

//---------------------------------------------------------------------------------------------------
// here we see event object as parameter inside fucntion() of addEventListener

// const content = document.querySelector('#wrapper');
// content.addEventListener('click',function(event){             // here we pass a parameter event object, event ki jgah kuch bhi likh skte hai - a,b,c, event 
//     console.log(event);
// });

//----------------------------------------------------------------------------------------------------
// here we see The default action : 

// let links = document.querySelectorAll('a');
// let thirdLink = links[2];
// thirdLink.addEventListener('click',function(event){
//     event.preventDefault();
//     console.log('maza aaya, achha laga');              // now link3 will not open...
// });

//--------------------------------------------------------------------------------------
// Avoid too many events : i) part

// let myDiv = document.createElement('div');          // <div> tag
// function paraStatus (event){
//     // console.log('I have clicked on para ');               
//     console.log('para ' + event.target.textContent);  // jis element ke upar ye event occur hoga, uska text print hona chahiye
// }

// myDiv.addEventListener('click',paraStatus);
// for(let i=1;i<=100;i++){
//     let newElement = document.createElement('p');             // we created a new para 
//     newElement.textContent = 'This is para ' + i;            // para ke andar text daal diya hai

//     myDiv.appendChild(newElement);                     // myDiv ke andar 100 child add ho jaayenge 
// }
// document.body.appendChild(myDiv);

//--------------------------------------------------------------------------------------------
// 2nd part of above : with aricle and span written in html code

let element = document.querySelector('#wrapper');

element.addEventListener('click', function(event){ 
    if(event.target.nodeName === 'SPAN'){                // this 'SPAN' is nodeName of span tag
        console.log('span par click kiya hai ' + event.target.textContent);   // ab sirf span tag ke andar hi chalega ye
    }
    // console.log('span par click kiya hai ' + event.target.textContent);
});

