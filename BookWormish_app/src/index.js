// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Tailwind CSS
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
);