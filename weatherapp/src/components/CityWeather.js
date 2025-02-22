/*import React, { useState } from 'react';
import axios from 'axios';
import './CityWeather.css';

export default function CityWeather() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const API_KEY = '7a3e986a749b6916f8f60ca2fb56067c';

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const getWeather = () => {
    if (!city.trim()) {
      setError('Please enter a city');
      setWeatherData(null);
      return;
    }

    setError('');

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch(() => {
        setError('City not found or invalid API key');
        setWeatherData(null);
      });
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', marginTop: '20px' }}>
      <h1>Weather App</h1>
      <div>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={handleCity}
          style={{ padding: '10px', fontSize: '16px', marginRight: '10px' }}
        />
        <button
          onClick={getWeather}
          style={{ padding: '10px', fontSize: '16px', cursor: 'pointer' }}
        >
          Get Weather
        </button>
      </div>

      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}

      {weatherData && (
        <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ddd', display: 'inline-block' }}>
          <h2>{weatherData.name}</h2>
          <p>Temperature: <strong>{weatherData.main.temp} °C</strong></p>
          <p>Humidity: <strong>{weatherData.main.humidity} %</strong></p>
          <p>Weather: <strong>{weatherData.weather[0].description}</strong></p>
        </div>
      )}
    </div>
  );
}

*/


import React, { useState } from 'react';
import axios from 'axios';
import './CityWeather.css';

export default function CityWeather() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const API_KEY = '7a3e986a749b6916f8f60ca2fb56067c';

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const getWeather = () => {
    if (!city.trim()) {
      setError('Please enter a city');
      setWeatherData(null);
      return;
    }

    setError('');

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch(() => {
        setError('City not found or invalid API key');
        setWeatherData(null);
      });
  };

  return (
    <div className="weather-container">
      <h1>Weather App</h1>
      <input type="text" placeholder="Enter city" value={city} onChange={handleCity} />
      <button onClick={getWeather}>Get Weather</button>

      {error && <p className="error">{error}</p>}

      {weatherData && (
        <div className="weather-info">
          <h2>{weatherData.name}</h2>
          <p>Temperature: <strong>{weatherData.main.temp} °C</strong></p>
          <p>Humidity: <strong>{weatherData.main.humidity} %</strong></p>
          <p>Weather: <strong>{weatherData.weather[0].description}</strong></p>
        </div>
      )}
    </div>
  );
}



