import React, { Component } from 'react';
import { ProfessorItemList } from './styles';

export class SejaUmProfessorPage extends Component {

  render() {
    return (
      <ProfessorItemList>
        <li>
          <h1>Professor Online</h1>
        </li>
        <li>
          <input type='text'/>
        </li>
        <li>
          <p1>Aqui vai uma imagem</p1>
        </li>
      </ProfessorItemList>
    );
  }
}
