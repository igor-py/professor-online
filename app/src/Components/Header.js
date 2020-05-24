import React from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/Header.css';
import professor from '../images/professor.png';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function Header() {
  const history = useHistory();

  const routeChange = () => {
    let path = `/`;
    history.push(path);
  };

  return (
    <div id="headerContainer">
      <div id="logoContainer" onClick={routeChange}>
        <img src={professor} alt="Professor Online" />
      </div>
      <div id="labelContainer">
        <Link to="/cadastrar" className="links-header">
          Cadastrar
        </Link>
        <Link to="/entrar" className="links-header">
          Entrar
        </Link>
      </div>
    </div>
  );
}
