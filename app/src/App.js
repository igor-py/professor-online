import React from 'react';
import './styles/reset.css';
import './styles/App.css';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Header from './Components/Header';
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
