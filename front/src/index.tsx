import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux'
import 'normalize.css'
import 'semantic-ui-css/semantic.min.css'
import 'antd/dist/antd.css';
import App from './App';
import AuthProvider from "./components/auth_provider/AuthProvider";
import store from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <AuthProvider>
          <App/>
        </AuthProvider>
      </Router>
    </Provider>

  </React.StrictMode>,
  document.getElementById('root'),
);

