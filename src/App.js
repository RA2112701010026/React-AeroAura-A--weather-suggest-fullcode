import React, { useState } from 'react';
import axios from 'axios';
import WeatherComponent from './WeatherComponent';
import OutfitRecommendationComponent from './OutfitRecommendationComponent';
import Button from './Button';

import './App.css';

// ... (other imports)

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [input, setInput] = useState('');

  const handleClick = () => {
    const apiKey = 'd1870a15c36289f75dde4a53a310deb7';
    const city = input.trim();

    if (city !== '') {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      axios.get(apiUrl)
        .then(response => {
          const temperature = response.data.main.temp;
          const condition = response.data.weather[0].main;
          const humidity = response.data.main.humidity;

          // Simulated air pollution data (this is fictional)
          const air_pollution = {
            pm2_5: 15, // Example value for PM2.5
            pm10: 25,  // Example value for PM10
            aqi: 40    // Example value for Air Quality Index
          };

          setWeatherData({ temperature, condition, humidity, air_pollution });
        })
        .catch(error => {
          console.error('Error fetching weather data:', error);
          setWeatherData(null);
        });
    } else {
      setWeatherData(null);
    }
  };

  // ... (rest of the component)



  return (
    <div className="app">
      <h1>AeroAura</h1>
      <input
        className='location'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button handleClick={handleClick}></Button>
      
      <WeatherComponent weatherData={weatherData} />
      <OutfitRecommendationComponent weatherData={weatherData} />
    </div>
  );
}

export default App;
