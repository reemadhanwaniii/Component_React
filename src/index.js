import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DogTile from './DogTile';
import Demo from './Demo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <DogTile /> 
    <Demo /> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
