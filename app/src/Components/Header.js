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

  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
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
        <Link to="" className="links-header" onClick = {myFunction}>
          Entrar
        </Link>
      </div>

      <div id="myDropdown" className="dropdown-content">
        <div>
          <h3>E-mail</h3>
          <input type= "text"/>
        </div>

        <div>
          <h3>Senha</h3>
          <input type= "password"/>
        </div>

        <button><span>Entrar</span></button>

          
      </div>

      
    </div>



  );
}
