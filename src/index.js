import React from 'react';
import reactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

const app = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

reactDom.render(app, document.getElementById('root'));