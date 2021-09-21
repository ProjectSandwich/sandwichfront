import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Auth0Provider
      domain="dev-69d1ck-m.us.auth0.com"
      clientId="ZdMKiTqqH1DBIAANHYsrqDIfiKUJ4GuU"
      redirectUri={window.location.origin}>
      <App />
    </Auth0Provider>,
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
