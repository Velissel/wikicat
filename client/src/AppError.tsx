import React from 'react';
// @ts-ignore
import logo from './logo.svg';
import './AppError.scss';

function AppError() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>An Error has occured</p>
      </header>
    </div>
  );
}

export default AppError;
