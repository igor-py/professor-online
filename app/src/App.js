import React from 'react';
import './styles/reset.css';
import './styles/App.css';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header/>

      <Home/>

      <Footer/>

    </div>
  );
}

export default App;
