import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import App from './App';

const app = (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app);

