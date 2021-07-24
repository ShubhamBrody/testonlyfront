import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

var bg = document.getElementById('parallaxBG');
var bgcont = document.getElementById('parallaxContainer');

window.addEventListener('scroll', () => {
    var val = window.scrollY;
    if(bg)
    bg.style.top = val*(-0.3) + 'px';
    if(bgcont)
    bgcont.style.top = val + 'px';
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);