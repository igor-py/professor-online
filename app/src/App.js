import React from 'react';
import './styles/reset.css';
import './styles/App.css';
import Footer from './Components/Footer';
import Home from './Components/Home';
<<<<<<< HEAD
import Pesquisa from './pages/Pesquisa';
=======
import Header from './Components/Header';
import Routes from './routes';
>>>>>>> 858d1173d10f52e045549315d88b07e113b7ed1b

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
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

      <Pesquisa/>

      <Footer/>

=======
      <Routes />
>>>>>>> 858d1173d10f52e045549315d88b07e113b7ed1b
    </div>
  );
}

export default App;
