import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import App from './App';
import { store } from './redux/store';
import reportWebVitals from './reportWebVitals';

axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.withCredentials = true;

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
