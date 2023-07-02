import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NumberPage from './NumberPage';
import { store } from './store';
import {Provider} from 'react-redux'
import Tasks from './Tasks';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    {/*<NumberPage />*/}
    <Tasks/>
    </Provider>
  </React.StrictMode>
);
