import './App.css'
import { useState, useEffect } from 'react';
import WeatherInfo from './components/WeatherInfo';

function App() {

  const apiKey = "124472a4455476e91b1747a98f6be8d6";
  const [city, setCity] = useState('rotterdam');
  const [weatherData, setWeatherData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      const data = await response.json();
      console.log(data)
      setWeatherData(data);
    };

    fetchWeather();
  }, [city]);


const searchHandler = (e) => {
 console.log(e.target.value);
    let newSearch = e.target.value;
    setSearchInput(newSearch);

};

const submitHandler = (e)=> {
e.preventDefault()
  setCity(searchInput);
 console.log(city)
};


  return (
    <>
      <form>
        <input type="text" placeholder="Typ hier uw stad" name="search" value={searchInput} onChange={searchHandler} />
        <button  onClick={submitHandler}>Zoeken</button>
      </form>

      {weatherData ? 
      
          <WeatherInfo
      
    cityName={weatherData.name}
    weatherIcon={weatherData.weather[0].icon}
    weatherTemp={weatherData.main.temp}
    weatherChill={weatherData.main.feels_like}
    weatherHumidity={weatherData.main.humidity}
    weatherWind={weatherData.wind.speed}
    weatherDesc={weatherData.weather[0].description}
      />
    : <p>Data aan het laden</p>}


    </>
  )
}

export default App
