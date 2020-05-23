import React, { Component } from 'react';
import Header from '../../Components/Header';
import { ProfessorItemList, ProfessorItemContainer } from './styles';
import './styles.css';

export default function SejaUmProfessorPage() {
    return (
      <ProfessorItemContainer>
      <Header />
      <ProfessorItemList>
        
        <body>
          <li>
            <h1>Vantagens</h1>
          </li>
          <li>
            <div class="paragrafos">
              <li class="vantagem">Possibilidade de mudar vidas;</li>
              <li class="vantagem">Possibilidade de mudar o mundo ao seu redor;</li>
              <li class="vantagem">Aprendizado constante;</li>
              <li class="vantagem">Casa dia é um dia diferente;</li>
              <li class="vantagem">Possibilidade constante de se fazer novas amizades;</li>
              <div class="frase-motivacional">
                <li class="frase">Feliz aquele que transfere o que sabe e aprende o que ensina.</li>
                <li class="autor">Autor: Cora Coralina</li>
              </div>      
            </div>
            <button class="botao">Inscreva-se</button>
          </li>
        </body>
        
      </ProfessorItemList>
      </ProfessorItemContainer>
    );
}
