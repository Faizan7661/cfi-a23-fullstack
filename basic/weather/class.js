import axios from "axios";
import readlineSync from "readline-sync";

const apiKey = '60969471e10ce2b1a352702ec3da97b4';
// let count =0;

function getWeatherData(cityname) {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apiKey}`)
    .then((res)=>{
        let data = res.data;
        console.log(data);
        // console.log(data.main.temp_max);
    }).catch((error)=>{
        console.error(error);
        console.error('Somthing Went Wrong');
    })
}
getWeatherData("Hyderabad");



// console.log(city_names, city_names.length);
// city_names.forEach((ele)=>{
//     getWeatherData(ele,apiKey);
//     count ++;
// })

// getWeatherData('Hyderabad',apiKey);

/*

Create a Weather CLI Application with the Following Menu

Enter Cityname :

1. Show Temperature (Show in both °C and °F and °K)
2. Show Humidity
3. Print Date and Time in Current Timezone 
4. Get Sunrise Time
5. Get Sunset Time
6. Show Max and Min Temperature (Show in both °C and °F and °K)
*. Change City
0. Exit

Show do you want to Continue Option after Every Result

*/  
export default getWeatherData;

