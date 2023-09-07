import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css'
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';
import RoutsApp from './routs';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter>
    <App />
    </BrowserRouter> */}
    <RoutsApp/>
  </React.StrictMode>
);


