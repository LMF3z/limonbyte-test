import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/globals.css';
import StoreContext from './store/Store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreContext>
      <App />
    </StoreContext>
  </React.StrictMode>
);
