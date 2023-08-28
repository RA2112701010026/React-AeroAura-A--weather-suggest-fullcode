import React from 'react';

function WeatherComponent({ weatherData }) {
  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const { temperature, condition, humidity, air_pollution } = weatherData;

  return (
    <div className="weather-component">
      <h2>Weather Information</h2>
      <p>Temperature: {temperature}°C</p>
      <p>Condition: {condition}</p>
      <p>Humidity: {humidity}%</p>
      <div>
        <p>Air Pollution:</p>
        <p>PM2.5: {air_pollution.pm2_5}, PM10: {air_pollution.pm10}, AQI: {air_pollution.aqi} </p>
       
      </div>
    </div>
  );
}

export default WeatherComponent;
