import React from 'react';


function OutfitRecommendationComponent({ weatherData }) {
  if (!weatherData) {
    return null;
  }
  const { temperature } = weatherData;

  let topsRecommendation = '';
  let bottomsRecommendation = '';
  let footwearRecommendation = '';

  if (temperature <= 0) {
    topsRecommendation = 'Tops: Sweaters, Jumpers, Turtlenecks.';
    bottomsRecommendation = 'Bottoms: Pants, Leggings (preferably waterproof).';
    footwearRecommendation = 'Footwear: Waterproof winter boots (with a good grip and insulated lining).';
  } else if (temperature <= 15) {
    topsRecommendation = 'Tops (for Layering): Shirts, Hoodies, Dresses.';
    bottomsRecommendation = 'Bottoms: Jeans, Trousers, Skirts.';
    footwearRecommendation = 'Footwear: Sneakers, Boots.';
  } else if (temperature <= 25) {
    topsRecommendation = 'Tops: T-shirts, Tank tops, Sleeveless blouses or shirts, Light and breathable short-sleeve shirts.';
    bottomsRecommendation = 'Bottoms: Shorts, Skirts, Light and airy trousers.';
    footwearRecommendation = 'Footwear: Sandals, Slip-on shoes or espadrilles.';
  } else {
    topsRecommendation = 'Tops: T-shirts, Tank tops, Sleeveless blouses or shirts, Light and breathable short-sleeve shirts.';
    bottomsRecommendation = 'Bottoms: Shorts, Skirts, Light and airy trousers.';
    footwearRecommendation = 'Footwear: Sandals, Slip-on shoes or espadrilles.';
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
    </div>
  );
}

export default OutfitRecommendationComponent;
