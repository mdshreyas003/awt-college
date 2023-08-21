import React, { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [area, setArea] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [prediction, setPrediction] = useState(null);

  const handlePrediction = async () => {
    try {
      // Replace 'YOUR_BACKEND_API_URL' with the actual backend API endpoint for prediction
      const response = await axios.post('http://localhost:5000/predict', {
        area: parseFloat(area),
        bedrooms: parseInt(bedrooms),
        bathrooms: parseInt(bathrooms),
      });

      setPrediction(response.data.prediction);
    } catch (error) {
      console.error('Error making prediction:', error);
    }
  };
  const style={
    'border':'1px solid black',
  }
  return (
    <div style={style}>
      <h1>House Price Prediction App</h1>
      <div>
        <label>
          Area (in sqft):
          <input
            type="number"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Bedrooms:
          <input
            type="number"
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Bathrooms:
          <input
            type="number"
            value={bathrooms}
            onChange={(e) => setBathrooms(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handlePrediction}>Predict Price</button>
      {prediction !== null && <p>Predicted Price: ${prediction}</p>}
    </div>
  );
};

export default Home;
