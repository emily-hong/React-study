import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Trip from './Trip';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <App/>
    <Trip/>
  </div>
);