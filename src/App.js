import React, { useState } from 'react';
import axios from 'axios';
import WeatherComponent from './WeatherComponent';
import OutfitRecommendationComponent from './OutfitRecommendationComponent';
import Button from './Button';

import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [input, setInput] = useState('');

  const handleClick = () => {
    const apiKey = '2b4c51625f5ea671a0a14148c71d4fd1';
    const city = input.trim(); // Trim any leading/trailing whitespace

    if (city !== '') {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      axios.get(apiUrl)
        .then(response => {
          const temperature = response.data.main.temp;
          const condition = response.data.weather[0].main;
          setWeatherData({ temperature, condition });
        })
        .catch(error => {
          console.error('Error fetching weather data:', error);
          setWeatherData(null); // Clear weather data on error
        });
    } else {
      setWeatherData(null); // Clear weather data when input is empty
    }
  };

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
