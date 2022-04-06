import React from 'react';
import { createRoot } from 'react-dom/client'
import './styles/index.css';
import Home from './contents/home';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root'))
root.render(<Home/>)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
