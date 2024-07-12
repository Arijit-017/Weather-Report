let cityValue = "naihati"
function findme(cityValue){
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=217a63e62476eb0bfe92f96d8f66eacf&units=metric`;
    fetch(url)
    .then((response)=>{
        console.log(response);
        return response.json();
    })
    .then((json)=>{
        document.querySelector('#item2').innerHTML = `<img height=100px src="https://openweathermap.org/img/w/${json.weather[0].icon}.png">`
        document.querySelector('#item3').innerHTML = `${json.weather[0].main}`
        document.querySelector('#item5').innerHTML = `Temperature<br>${json.main.temp}°C`
        document.querySelector('#item6').innerHTML = `Feels like<br>${json.main.feels_like}°C`
        document.querySelector('#item4').innerHTML = `${json.name}`
        document.querySelector('#item7').innerHTML = `Pressure<br>${json.main.pressure} mb`
        document.querySelector('#item8').innerHTML = `Humidity<br>${json.main.humidity}`
        document.querySelector('#item9').innerHTML = `Wind Speed<br>${json.wind.speed} m/s`
        document.querySelector('#item10').innerHTML = `Cloudes<br>${json.clouds.all}%`
        if (json.main.temp < 5) {
            document.querySelector("#item5").style.backgroundColor = '#75b4e3';
        }
        else if (json.main.temp < 20) {
            document.querySelector("#item5").style.backgroundColor = 'yellow';
        } else if (json.main.temp>20 & json.main.temp < 35) {
            document.querySelector("#item5").style.backgroundColor = 'orange';
        } else {
            document.querySelector("#item5").style.backgroundColor = 'red';
        }
    })
}
findme(cityValue)
document.querySelector('button').addEventListener('click', () => {
    cityValue = document.querySelector('input').value;
    findme(cityValue);
});