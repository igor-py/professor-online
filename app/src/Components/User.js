import React from 'react';
import proffLogo from '../images/professor.png';

export default function User({ user }) {
    return (
      <li key = {user.id}>
        <div id = "infoPesquisaContainer">
          <div id = "logoContainer">
            <img src={proffLogo} />
          </div>
          <div id = "userInfoContainer">
            <p>Aula: {user.aula}</p>
            <p>Professor: {user.name}</p>
            <p>Nota: {user.rating}</p>
          </div>
          <div id = "actionContainer">
            <button type="button">Convsersar</button>
          </div>
        </div>
      </li>
    )
}
