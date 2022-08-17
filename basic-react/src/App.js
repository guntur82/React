import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Profile from './components/Profile';

function App() {
  return (
    <div className="container-fluid">
      <div className="container text-center">
        <h1>React</h1>
        <p>Test</p>
        <hr />
      </div>
      <Profile />
    </div>
  );
}

export default App;
