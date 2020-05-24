import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/Header.css';
import professor from '../images/professor.png';
import { getCookie, eraseCookie, setCookie } from '../utils/cookies';
import { config } from '../config';

export default function Header() {
  const [isLogged, setIsLogged] = useState();
  const [cookieState, setCookieState] = useState();

  useEffect(() => {
    const cookie = getCookie('auth');
    console.log('cookie ', cookie);
    if (cookie) {
      setCookieState(cookie);
      setIsLogged(true);
    } else {
      setCookieState('');
      setIsLogged(false);
    }
  }, [isLogged, cookieState]);

  const history = useHistory();

  function redirectToHome() {
    history.push('/');
  }

  function logOut() {
    eraseCookie('auth');
    eraseCookie('user');
    setCookieState('');
    redirectToHome();
  }

  async function logIn() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let response;

    try {
      response = await axios({
        method: 'post',
        url: `${config.SERVER_URL}/sessions`,
        data: {
          email,
          password,
        },
        crossDomain: true,
      });
    } catch (e) {
      alert('Ocorreu um erro no login, tente novamente!');
      return;
    }

    console.log(response);

    setCookie('user', String(response.data.user), 7);
    setCookie('auth', response.data.token, 7);
    const cookie = getCookie('auth');
    setCookieState(cookie);
    toogleDropdown();
    redirectToHome();
  }

  function renderUnloggedOptions() {
    return (
      <div id="labelContainer">
        <Link to="/pesquisa" className="links-header">
          Pesquisar Professores
        </Link>
        <Link to="/cadastrar" className="links-header">
          Cadastrar
        </Link>
        <label className="links-header" onClick={toogleDropdown}>
          Entrar
        </label>
      </div>
    );
  }

  function renderLoggedOptions() {
    return (
      <div id="labelContainer">
        <label className="links-header" onClick={logOut}>
          Log out
        </label>
        <Link to="/pesquisa" className="links-header">
          Pesquisar Professores
        </Link>
        <Link to="/perfil" className="links-header">
          Perfil
        </Link>
      </div>
    );
  }

  function toogleDropdown() {
    document.getElementById('myDropdown').classList.toggle('show');
  }

  return (
    <div id="headerContainer">
      <div id="logoContainer" onClick={redirectToHome}>
        <img src={professor} alt="Professor Online" />
      </div>
      {isLogged ? renderLoggedOptions() : renderUnloggedOptions()}

      <div id="myDropdown" className="dropdown-content">
        <div>
          <h3>E-mail</h3>
          <input type="text" id="email" />
        </div>

        <div>
          <h3>Senha</h3>
          <input type="password" id="password" />
        </div>

        <button onClick={logIn}>
          <span>Entrar</span>
        </button>
      </div>
    </div>
  );
}
