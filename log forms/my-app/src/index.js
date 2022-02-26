// import React, { useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
  


ReactDOM.render(
  
  <React.StrictMode>,
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// return(
//   <label className="password">Password
//   <input type={this.state.type} className="password__input" onChange={this.passwordStrength}/>
//   <span className="password__show" onClick={this.showHide}>{this.state.type === 'input' ? 'Hide' : 'Show'}</span>
//   <span className="password__strength" data-score={this.state.score} />
//   </label>
// )

