console.log('My name is Anurag Singhal');

const API_KEY = "7e6263ee09c86b942b8af0f5eedbd4b8";

function renderWeatherInfo(data){
    let newPara = document.createElement('p');                        // now, show it on UI
    newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`
    document.body.appendChild(newPara);
}

async function fetchWeatherDetails(){
    try{
        let lat = 15.3333;
        let lon = 74.0833;
        // let city = "goa";                            // for city wali api call

        // const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
        const data = await response.json();

        // console.log("Weather data :-> ", data);
        console.log(data);

        renderWeatherInfo(data);
    }
    catch(err){
        console.log("Error found -> ", err );        
    }
}

function getLocation(){
    if(navigator.geolocation){                               // if browser supports geolocation feature 
        navigator.geolocation.getCurrentPosition(showPosition);        // showPosition is a callback function
    }else{
        console.log("No geological Support ");
    }
}

function showPosition(position){
    let lat = position.coords.latitude;
    let longi = position.coords.longitude;

    console.log(lat);
    console.log(longi);
}