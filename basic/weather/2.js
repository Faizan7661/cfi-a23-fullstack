import axios from "axios";
import readlineSync from "readline-sync"
const apiKey = "60969471e10ce2b1a352702ec3da97b4"

async function WeatherData(cityname) {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apiKey}`);
        const data = response.data;
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error.message);
        return null;
    }
}


function menu(){
    const city = readlineSync.question(`Enter the city name : `);
    WeatherData(city)
    .then(data => {
        if(data){
            console.log(`***************Weather Report****************`);
            console.log(`City Name = `, data.name);
            console.log(`Country Name = `,data.sys.country);

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
            
            while(true){
            const optionsIndex = readlineSync.keyInSelect(options,`Select the Option = `);
            const selectedopion = options[optionsIndex];

            switch(selectedopion){
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
                    return menu();
                case 'Exit':
                    return;
                    break;
                default:
                    console.log(`Invalid Option. Please Enter Appropriate Option and be Careful with Spellings`);
                    break;

            }
            }
        } else{
          return  menu();
        }
    });
}

function kelvinToCelsius(kelvin){
    return kelvin - 273.15;
}

function kelvinToFahrenheit(kelvin){
    return (kelvin - 273.15) * 9 / 5 + 32;
}

function showTemperature(kelvinTemperature){
    const celsius = kelvinToCelsius(kelvinTemperature);
    const fahrenheit = kelvinToFahrenheit(kelvinTemperature);
    console.log(`Temperature`);
    console.log(`\t°C: ${celsius.toFixed(2)}`);
    console.log(`\t°F: ${fahrenheit.toFixed(2)}`);
    console.log(`\t K: ${kelvinTemperature.toFixed(2)}`);
}

function printCurrentDateTime(timestamp){
    const currentDateTime = new Date();
    console.log('Current Date and Time = ', currentDateTime.toString());
}

function getSunriseTime(timestamp){
    const sunriseTime = new Date(timestamp * 1000);
    console.log(`Sunrise time is = `,sunriseTime.toLocaleTimeString());
}

function getSunsetTime(timestamp){
    const sunsetTime = new Date(timestamp * 1000);
    console.log(`Sunset time is = `, sunsetTime.toLocaleTimeString())
}

function showMaxMinTemperature(maxKelvin,minKelvin){
    const maxCelsius = kelvinToCelsius(maxKelvin);
    const minCelsius = kelvinToCelsius(minKelvin);
    const maxFahrenheit = kelvinToFahrenheit(maxKelvin);
    const minFahrenheit = kelvinToFahrenheit(minKelvin);
    console.log(`Min And Max Temperature : `);
    console.log(`\tMax: °C: ${maxCelsius.toFixed(2)}, °F: ${maxFahrenheit.toFixed(2)}, K: ${maxKelvin.toFixed(2)}`);
    console.log(`\tMin: °C: ${minCelsius.toFixed(2)}, °F: ${minFahrenheit.toFixed(2)}, K: ${minKelvin.toFixed(2)}`);

}

  


menu()

