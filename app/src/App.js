import React from 'react';
import './styles/reset.css';
import './styles/App.css';
import Footer from './Components/Footer';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="caixa">
          <nav className="paginas">
            <p>Seja um Professor</p>
            <p>Inscreva-se</p>
            <p>Entrar</p>
          </nav>
        </div>
      </header>

      <Home/>

      <Footer/>

    </div>
  );
}

export default App;
