import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div className="homepage">
      <div className='homepage-content'>
        <h1>Fetch!</h1>
        <h2>View all your favorite breeds of dogs</h2>
        <div className='homepage-buttons-container'>
          <Link to="/Breed" className='homepage-buttons'>Breed</Link>
          <Link to="/Random" className='homepage-buttons'>Random</Link>
        </div>
      </div>
    </div>
  );
}

export default App;
