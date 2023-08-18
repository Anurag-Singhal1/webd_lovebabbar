const inputSlider = document.querySelector('[data-lengthSlider]');
const lengthDisplay = document.querySelector('[data-lengthNumber]');

const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';


// initially
let password = "";
let passwordLength = 10;                                 // by default 
let checkCount = 0; 
handleSlider();
// strength circle color to grey

// set password length
function handleSlider(){                           // iska kaam hai, UI mein password Length ki value dikhana
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
    // or kuch bhi krna chahiye ??
}

function setIndicator(color){
    indicator.style.backgroundColor = color;
    // shadow banao iski
}

function getRndInteger(min, max){
    return Math.floor(Math.random() * (max-min)) + min ;               // random no between min to max
}

function generateRandomNumber(){
    return getRndInteger(0,9);
}

function generateLowerCase(){
    return String.fromCharCode(getRndInteger(97,123));                 //     [97,123)  a-z
}

function generateUpperCase(){
    return String.fromCharCode(getRndInteger(65,91));                    // A-Z
}

function generateSymbol(){
    const randNum = getRndInteger(0,symbols.length);
    return symbols.charAt(randNum);                           // which symbol is that index by charAt( )
}

function calcStrength() {
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;
    if (uppercaseCheck.checked) hasUpper = true;
    if (lowercaseCheck.checked) hasLower = true;
    if (numbersCheck.checked) hasNum = true;
    if (symbolsCheck.checked) hasSym = true;
  
    if (hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8) {
      setIndicator("#0f0");
    } else if (
      (hasLower || hasUpper) &&
      (hasNum || hasSym) &&
      passwordLength >= 6
    ) {
      setIndicator("#ff0");
    } else {
      setIndicator("#f00");
    }
}

// to copy to clipboard
async function copyContent(){
    try{
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText = "copied";                     // span ke andar ye copied daal denge
    }
    catch(e){
        copyMsg.innerText = "Failed";
    }   
    // to make copy wala span visible
    copyMsg.classList.add('active');

    setTimeout(() => {
       copyMsg.classList.remove('active');                   // 2 sec ke baad active wali class hat jaaye 
    },2000);
}

// below input is an event like click, scroll, 
inputSlider.addEventListener('input', (e)=>{                // event target
    passwordLength = e.target.value;
    handleSlider();
});

copyBtn.addEventListener('click', ()=>{
    if(passwordDisplay.value){                          // non-empty value
        copyContent();
    }
});

function shufflePassword(array){
    // Fisher Yates Method
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));       // j is a random index no here
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    let str = "";
    array.forEach((el) => (str += el));
    return str;
};

function handleCheckBoxChange(){
    checkCount = 0;
    allCheckBox.forEach((checkbox)=>{
        if(checkbox.checked){
            checkCount++;
        }
    });

    // special condition
    if(passwordLength < checkCount){             // agar 4 box tick ho, and slider 1 len password pe ho
        passwordLength = checkCount;
        handleSlider();
    }
}

allCheckBox.forEach((allCheckBox)=>{
    allCheckBox.addEventListener('change',handleCheckBoxChange);   // change means ticked or unticked both
});

generateBtn.addEventListener('click',()=>{
    // none of the checkbox are selected
    if(checkCount <= 0){
        return;
    }
    if(passwordLength < checkCount){           // checkCount is the count of no of boxes marked tick 
        passwordLength = checkCount;
        handleSlider();
    }

    // let's start the journey to find the new password

    // if there is already a password, then first remove that (remove old password)
    password = "";
    
    // let's put the stuff mentioned by checkboxes

    // if(uppercaseCheck.checked){
    //     password += generateUpperCase();
    // }
    // if(lowercaseCheck.checked){
    //     password += generateLowerCase();
    // }
    // if(numbersCheck.checked){
    //     password += generateRandomNumber();
    // }
    // if(symbolsCheck.checked){
    //     password += generateSymbol();
    // }

    // we will make a function array, rather using above method bcz let we have to return 15 length password
    let funcArr = [];                  // iss array ke andar functions pade haii

    if(uppercaseCheck.checked){
        funcArr.push(generateUpperCase);
    }
    if(lowercaseCheck.checked){
        funcArr.push(generateLowerCase);
    }
    if(numbersCheck.checked){
        funcArr.push(generateRandomNumber);
    }
    if(symbolsCheck.checked){
        funcArr.push(generateSymbol);
    }

    // compulsory addition                          -> jitne checkbox tick haiii
    for(let i=0;i<funcArr.length;i++){
        password += funcArr[i]();
    }

    // remaining addition                         -> let length is 15, and tick box are 3 , so rem 12 to fill
    for(let i=0;i<passwordLength-funcArr.length;i++){
        let randIndex = getRndInteger(0,funcArr.length);
        password += funcArr[randIndex]();
    }

    // now we get our commplete password, now shuffle it 
    password = shufflePassword(Array.from(password));           // password ko array ki form mein bhej diya     

    // show in UI
    passwordDisplay.value = password;

    // now, show the calculate strength : 
    calcStrength();

});