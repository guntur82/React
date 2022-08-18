import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Profile from './components/Profile';
// import LearnButton from './components/LearnButton';
import LearnForm from './components/LearnForm';

function App() {
  return (
    <div className="container-fluid">
      <div className="container text-center">
        <h1>React</h1>
        <p>Test</p>
        <hr />
      </div>
      <div className="contariner">
        <div className="row">
          <Profile />
          <LearnForm />
          {/* <LearnButton /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
