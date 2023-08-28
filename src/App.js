// App.js
import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import WeatherComponent from './WeatherComponent';
import OutfitRecommendationComponent from './OutfitRecommendationComponent';
import Button from './Button';
import './App.css';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'YOUR_FIREBASE_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID'
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// ...

function App() {
  const [user, setUser] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [input, setInput] = useState('');

  // Initialize Firebase Authentication
  useEffect(() => {
    firebase.auth().onAuthStateChanged(authUser => {
      setUser(authUser);
    });
  }, []);

  const handleSignIn = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      await firebase.auth().signInWithPopup(provider);
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleClick = async () => {
    // ... (fetch weather data from API and set it)

    // Schedule a notification for the user
    if (user) {
      const messaging = firebase.messaging();
      await messaging.requestPermission();
      
      const registrationToken = await messaging.getToken();
      const notificationMessage = {
        notification: {
          title: 'Daily Outfit Recommendation',
          body: 'Here are your outfit recommendations for today!'
        },
        token: registrationToken
      };

      await fetch('https://fcm.googleapis.com/fcm/send', {
        method: 'POST',
        headers: {
          Authorization: 'Bearer YOUR_FCM_SERVER_KEY',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(notificationMessage)
      });
    }
  };

  return (
    <div className="app">
      <h1>AeroAura</h1>
      <div className="location-container">
        {user ? (
          <button onClick={handleSignOut}>Sign Out</button>
        ) : (
          <button onClick={handleSignIn}>Sign In with Google</button>
        )}
        <input
          className='location-input'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter city"
        />
        <button onClick={handleClick}>Get Weather and Outfit Recommendations</button>
      </div>
      {/* ... (WeatherComponent and OutfitRecommendationComponent) */}
    </div>
  );
}

export default App;
