import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/Header.css';
import professor from '../images/professor.png';
import { BrowserRouter as Link } from 'react-router-dom';
import { getCookie } from '../utils/cookies';

export default function Header() {
  const [isLogged, setIsLogged] = useState();

  useEffect(() => {
    const cookie = getCookie('auth');
    console.log('cookie ', cookie);
    if (cookie) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [isLogged]);

  const history = useHistory();

  const routeChange = () => {
    let path = `/`;
    history.push(path);
  };

  function RenderUnloggedOptions() {
    return (
      <div id="labelContainer">
        <Link to="/cadastrar" className="links-header">
          Cadastrar
        </Link>
        <label className="links-header" onClick={ShowDropdown}>
          Entrar
        </label>
      </div>
    );
  }

  function RenderLoggedOptions() {
    return <div>logged in</div>;
  }

  function ShowDropdown() {
    document.getElementById('myDropdown').classList.toggle('show');
  }

  return (
    <div id="headerContainer">
      <div id="logoContainer" onClick={routeChange}>
        <img src={professor} alt="Professor Online" />
      </div>
      {isLogged ? RenderLoggedOptions() : RenderUnloggedOptions()}

      <div id="myDropdown" className="dropdown-content">
        <div>
          <h3>E-mail</h3>
          <input type="text" />
        </div>

        <div>
          <h3>Senha</h3>
          <input type="password" />
        </div>

        <button>
          <span>Entrar</span>
        </button>
      </div>
    </div>
  );
}
