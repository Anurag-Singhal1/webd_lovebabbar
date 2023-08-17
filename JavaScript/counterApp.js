const countValue = document.querySelector('#counter');
// IMP Point : countValue refers to div element

const increment = () => {
    // get the value from UI
    let value = parseInt(countValue.innerText);          // to convert string to int we use parseInt
    // update the value
    value = value + 1;                                   // this points to the value inside div (countValue)
    // set the updated value onto UI
    countValue.innerText = value;
};

const decrement = () => {
    // get the value from UI
    let value = parseInt(countValue.innerText);          // to convert string to int we use parseInt
    // update the value
    value = value - 1;
    // set the updated value onto UI
    countValue.innerText = value;
};


// by using simple standard function :-

// function decrement(){
//     let value = parseInt(countValue.innerText);
//     value = value - 1;
//     countValue.innerText = value;
// };
