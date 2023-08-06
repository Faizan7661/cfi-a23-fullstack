import axios from "axios";
import readlineSync from "readline-sync";
const apiKey = '60969471e10ce2b1a352702ec3da97b4';



function getWeatherData(cityname) {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apiKey}`)
        .then((response) => {
            let data = response.data;
            return data;
        }).catch((error) => {
            console.error('Error fetching weather data:', error.message);
            return null;
        });
}

function mainmenu() {
    const city = readlineSync.question(`Enter City Name: `);
    getWeatherData(city)
        .then(data => {
            if (data) {
                console.log(`\n-------------Weather Information------------`);
                console.log(`City: `, data.name);
                console.log(`Country: `, data.sys.country);
                console.log(`--------------------------------------------`)

                const options = [
                    'Show Temperature',
                    'Show Humidity',
                    'Print Date and Time in Current Timezone',
                    'Get Sunrise Time',
                    'Get Sunset Time',
                    'Show Max and Min Temperature',
                    'Change City',
                    'Exit'
                ];
                

                while (true) {
                    const optionsIndex = readlineSync.keyInSelect(options, `Select an Option = `);
                    const selectedOption = options[optionsIndex];
                    console.log(`--------------------------------------------`)
                    
                    switch (selectedOption) {
                        case 'Show Temperature':
                            showTemperature(data.main.temp);
                            console.log(`--------------------------------------------`)

                            break;
                        case 'Show Humidity':
                            console.log('Humidity = ', data.main.humidity, '%');
                            console.log(`--------------------------------------------`)
                            break;
                        case 'Print Date and Time in Current Timezone':
                            printCurrentDateTime();
                            console.log(`--------------------------------------------`)
                            break;
                        case 'Get Sunrise Time':
                            getSunriseTime(data.sys.sunrise);
                            console.log(`--------------------------------------------`)
                            break;
                        case 'Get Sunset Time':
                            getSunsetTime(data.sys.sunset);
                            console.log(`--------------------------------------------`)
                            break;
                        case 'Show Max and Min Temperature':
                            showMaxMinTemperature(data.main.temp_max, data.main.temp_min);
                            console.log(`--------------------------------------------`)
                            break;
                        case 'Change City':
                            return mainmenu();
                        case 'Exit':
                            return;
                        default:
                            console.log(`Invalid Option. Please Enter Appropriate Option and be Careful with Spellings`);
                            break;



                    }
                }
                
            } else {
                return mainmenu();
            }
        });
        
}

// Function to convert Kelvin to Celsius
function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
  }
  
  // Function to convert Kelvin to Fahrenheit
  function kelvinToFahrenheit(kelvin) {
    return (kelvin - 273.15) * 9 / 5 + 32;
  }
  
  // Function to display temperature in Celsius, Fahrenheit, and Kelvin
  function showTemperature(kelvinTemperature) {
    const celsius = kelvinToCelsius(kelvinTemperature);
    const fahrenheit = kelvinToFahrenheit(kelvinTemperature);
    console.log('Temperature:');
    console.log(`\tCelsius      : ${celsius.toFixed(2)}`,`°C`);
    console.log(`\tFahrenheit   : ${fahrenheit.toFixed(2)}`,`°F`);
    console.log(`\tKelvin       : ${kelvinTemperature.toFixed(2)}`,`K`);
  }
  
  // Function to display the current date and time in the current timezone
  function printCurrentDateTime() {
    const currentDateTime = new Date();
    console.log('Current Date and Time:', currentDateTime.toString());
  }
  
  // Function to get the sunrise time and display it
  function getSunriseTime(timestamp) {
    const sunriseTime = new Date(timestamp * 1000);
    console.log('Sunrise Time:', sunriseTime.toLocaleTimeString());
  }
  
  // Function to get the sunset time and display it
  function getSunsetTime(timestamp) {
    const sunsetTime = new Date(timestamp * 1000);
    console.log('Sunset Time:', sunsetTime.toLocaleTimeString());
  }
  
  // Function to show the max and min temperature in Celsius, Fahrenheit, and Kelvin
  function showMaxMinTemperature(maxKelvin, minKelvin) {
    const maxCelsius = kelvinToCelsius(maxKelvin);
    const minCelsius = kelvinToCelsius(minKelvin);
    const maxFahrenheit = kelvinToFahrenheit(maxKelvin);
    const minFahrenheit = kelvinToFahrenheit(minKelvin);
  
    console.log('Max and Min Temperature:');
    console.log(`\tMax: ${maxCelsius.toFixed(2)} °C,  ${maxFahrenheit.toFixed(2)} °F, ${maxKelvin.toFixed(2)} K`);
    console.log(`\tMin: ${minCelsius.toFixed(2)} °C,  ${minFahrenheit.toFixed(2)} °F, ${minKelvin.toFixed(2)} K`);
  }
  
 

mainmenu();






// console.log(`*****************************************`);
// console.log(`               Weather App         `);
// console.log(`*****************************************`);
// console.log('***************OPTIONS MENU**************');
// var City = readlineSync.question(`Enter City Name : `);
// console.log(`1. Show Temperature\n2. Show Humidity\n3. Date and Time in Current TimeZone\n4. Sunrise Time\n5. Sunset Time\n6. Maximm and Minimum Temperature\n7. Change city\n8.Exit`);
// console.log(`*****************************************`);
// console.log(`Enter the option in number(Eg : 1,2,3,4,5..)`);
// console.log(`*****************************************`);
// var option = readlineSync.question(`Select The Option : `);
// console.log(`*****************************************`);


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