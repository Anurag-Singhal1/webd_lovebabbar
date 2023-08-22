const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");

const grantAccessContainer = document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-info-container");

//initial variables 

let oldTab = userTab;
const API_KEY = "7e6263ee09c86b942b8af0f5eedbd4b8";
oldTab.classList.add("current-tab");                     // background color daal diya humne using css 
getfromSessionStorage();             // if already present then shows, otherwise finds the current location 
// ye pehli baaar to hamesha puchega hi, it helps when we again switch to current weather tab, browser close krte hi to sessionStorage() bhi chali jaati haii

function switchTab(clickedTab) {                    // clickedtab is newTab acc to babbar 
    if(clickedTab != oldTab) {                        // oldtab is like currentTab 
        oldTab.classList.remove("current-tab");
        oldTab = clickedTab;
        oldTab.classList.add("current-tab");
        
        // now we want to know that on which tab we are currently standing  
        if(!searchForm.classList.contains("active")) {
            //kya search form wala container is invisible, if yes then make it visible
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        }
        else {
            //main pehle search wale tab pr tha, ab your weather tab visible karna h 
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");     //userinfo bhi to searchForm krne pr aati hai na that's why also removing it
            //ab main your weather tab me aagya hu, toh weather bhi display karna poadega, so let's check local storage first
            //for coordinates, if we haved saved them there.
            getfromSessionStorage();
        }
    }
}

userTab.addEventListener("click", () => {
    //pass clicked tab as input paramter
    switchTab(userTab);
});

searchTab.addEventListener("click", () => {
    //pass clicked tab as input paramter
    switchTab(searchTab);
});

// check if coordinates are already present in session storage or not : 
function getfromSessionStorage() {
    const localCoordinates = sessionStorage.getItem("user-coordinates");  // we use key (user-coordinates) to get value 
    if(!localCoordinates) {
        //agar local coordinates nahi mile
        grantAccessContainer.classList.add("active");
    }
    else {
        const coordinates = JSON.parse(localCoordinates);      // json object ke andar convert kr diya
        fetchUserWeatherInfo(coordinates);             // ab inn coordinates se weather pata kro, api call krke
    }
}

async function fetchUserWeatherInfo(coordinates) {
    const {lat, lon} = coordinates;                   // coordinates have 2 value(lat,long).So, we use pair {,}

    // ab grantAccesscontainer ko hatado and loadingScreen ko visible krdo 
    grantAccessContainer.classList.remove("active");
    loadingScreen.classList.add("active");

    //API CALL
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
          );
        const  data = await response.json();

        // ab values fetch ho gyi hai, So, remove loading screen and shows userinfo-container (weather-info)
        loadingScreen.classList.remove("active");           
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);                     // fetch ki hui info ko render krdo UI par 
    }
    catch(err) {
        loadingScreen.classList.remove("active");
        //HW : if data is not visible then wo error wali image show krni haii -> error section add 
    }
}

function renderWeatherInfo(weatherInfo){
    // firstly we will fetch all the elements

    const cityName = document.querySelector("[data-cityName]");
    const countryIcon = document.querySelector("[data-countryIcon]");
    const desc = document.querySelector("[data-weatherDesc]");
    const weatherIcon = document.querySelector("[data-weatherIcon]");
    const temp = document.querySelector("[data-temp]");
    const windspeed = document.querySelector("[data-windspeed]");
    const humidity = document.querySelector("[data-humidity]");
    const cloudiness = document.querySelector("[data-cloudiness]");

    //fetch values from weatherINfo object and put it in UI elements :
    cityName.innerText = weatherInfo?.name;
    countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
    desc.innerText = weatherInfo?.weather?.[0]?.description;
    weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
    temp.innerText = `${weatherInfo?.main?.temp} °C`;
    windspeed.innerText = `${weatherInfo?.wind?.speed} m/s`;
    humidity.innerText = `${weatherInfo?.main?.humidity}%`;
    cloudiness.innerText = `${weatherInfo?.clouds?.all}%`;

}

function getLocation() {
    if(navigator.geolocation) {                                       // if support available 
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {                                                         // if not available, then show alert box  

        //HW - show an alert for no gelolocation support available  ???
        alert("Sorry, getLocation support is not available! ");
    }
}

function showPosition(position) {

    const userCoordinates = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
    }

    sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));    // key-value pair, value must be single -> so, we convert both latitude and longitude values in a string 
    fetchUserWeatherInfo(userCoordinates);
}

const grantAccessButton = document.querySelector("[data-grantAccess]");
grantAccessButton.addEventListener("click", getLocation);

const searchInput = document.querySelector("[data-searchInput]");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let cityName = searchInput.value;

    if(cityName === "")
        return;
    else 
        fetchSearchWeatherInfo(cityName);
});

async function fetchSearchWeatherInfo(city) {
    loadingScreen.classList.add("active");
    userInfoContainer.classList.remove("active");
    grantAccessContainer.classList.remove("active");

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
          );
        const data = await response.json();
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    }
    catch(err) {
        //hW
    }
};
