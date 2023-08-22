import React from 'react';

function WeatherComponent({ weatherData }) {
  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const { temperature, condition } = weatherData;

  return (
    <div className="weather-component">
      <h2>Weather Information</h2>
      <p>Temperature: {temperature}°C</p>
      <p>Condition: {condition}</p>
    </div>
  );
}

export default WeatherComponent;
