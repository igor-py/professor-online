import React, { Component } from 'react';
import Header from '../../Components/Header';
import { ProfessorItemList, ProfessorItemContainer } from './styles';

export default function SejaUmProfessorPage() {
    return (
      <ProfessorItemContainer>
      <Header />
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
      </ProfessorItemContainer>
    );
}
