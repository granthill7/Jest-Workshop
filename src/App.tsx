import React from 'react';
import logo from './logo.svg';
import './App.css';

export function divide(a: number, b: number): number {

  if (b === 0) {
    throw new Error("You can't divide by zero.");
  }

  return Math.round(a / b);
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
