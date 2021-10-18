import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import 'normalize.css'
import 'semantic-ui-css/semantic.min.css'
import App from './App';
import AuthProvider from "./components/auth_provider/AuthProvider";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <App/>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

