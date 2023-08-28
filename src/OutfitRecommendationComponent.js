import React from 'react';

function OutfitRecommendationComponent({ weatherData }) {
  if (!weatherData) {
    return null;
  }
  const { temperature, humidity } = weatherData;

  let topsRecommendation = '';
  let bottomsRecommendation = '';
  let footwearRecommendation = '';

  if (temperature <= 10) {
    topsRecommendation = 'Tops: Warm sweaters, Thermal wear, Jackets.';
    bottomsRecommendation = 'Bottoms: Thermal leggings, Jeans, Woolen pants.';
    footwearRecommendation = 'Footwear: Closed shoes or boots for warmth.';
  } else if (temperature <= 20) {
    topsRecommendation = 'Tops: Light sweaters, Long-sleeve shirts, Cardigans.';
    bottomsRecommendation = 'Bottoms: Jeans, Trousers, Leggings.';
    footwearRecommendation = 'Footwear: Comfortable shoes, Loafers, Ankle boots.';
  } else if (temperature <= 30) {
    topsRecommendation = 'Tops: T-shirts, Cotton blouses, Lightweight shirts.';
    bottomsRecommendation = 'Bottoms: Shorts, Skirts, Light trousers.';
    footwearRecommendation = 'Footwear: Sandals, Slip-on shoes, Sneakers.';
  } else {
    topsRecommendation = 'Tops: Light and breathable clothes like cotton shirts.';
    bottomsRecommendation = 'Bottoms: Shorts, Skirts, Light trousers.';
    footwearRecommendation = 'Footwear: Sandals, Flip-flops, Comfortable shoes.';
  }

  let additionalRecommendations = '';

  if (humidity >= 70) {
    additionalRecommendations = 'Consider lightweight and breathable fabrics to stay comfortable in high humidity.';
  }

  return (
    <div className="outfit-recommendation">
      <h2>Outfit Recommendation</h2>
      <div className="recommendation-section">
        <h3>Tops</h3>
        <p>{topsRecommendation}</p>
      </div>
      <div className="recommendation-section">
        <h3>Bottoms</h3>
        <p>{bottomsRecommendation}</p>
      </div>
      <div className="recommendation-section">
        <h3>Footwear Accessories</h3>
        <p>{footwearRecommendation}</p>
      </div>
      {additionalRecommendations && (
        <div className="recommendation-section">
          <h3>Additional Recommendations</h3>
          <p>{additionalRecommendations}</p>
        </div>
      )}
    </div>
  );
}

export default OutfitRecommendationComponent;
