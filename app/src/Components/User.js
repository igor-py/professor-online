import React from 'react';

export default function User({ user }) {
    return (
      <li key = {user.id}>
        <div id = "infoPesquisaContainer">
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
