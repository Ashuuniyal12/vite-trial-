import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import {Store} from '../src/features/Store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={Store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
)
