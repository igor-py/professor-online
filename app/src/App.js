import React from 'react';
import './styles/App.css';
import Footer from './Components/Footer';

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

      <main>
        <h1>Professor Online</h1>

        <p>Sunt aliquip quis ad exercitation aute enim. Veniam aliqua non id ea minim anim laborum ut irure ad tempor sunt.
          Qui tempor aliquip occaecat proident fugiat duis fugiat pariatur.</p>
      </main>

      <Footer/>

    </div>
  );
}

export default App;
