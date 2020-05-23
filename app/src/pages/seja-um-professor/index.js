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
            <h1 class="vantagens">Vantagens</h1>
          </li>
          <li>
            <div class="paragrafos">
              <li class="vantagem">Possibilidade de mudar vidas;</li>
              <li class="vantagem">Possibilidade de mudar o mundo ao seu redor;</li>
              <li class="vantagem">Aprendizado constante;</li>
              <li class="vantagem">Cada dia é um dia diferente;</li>
              <li class="vantagem">Possibilidade constante de se fazer novas amizades;</li>
            <div class="frase-motivacional">
                <li class="frase">Feliz aquele que transfere o que sabe e aprende o que ensina.</li>
                <li class="autor">Autor: Cora Coralina</li>
              </div>      
            </div>          
          </li>
          <li>
            <h1 class="porque">Por que ser um Professor?</h1>
          </li>
          <li>
            <div class="paragrafos">
              <li class="porque-li">Embora não seja uma profissão muito valorizada nos dias de hoje, ela é a mais importante que existe.<br/>
                 Isso porque a profissão de professor permeia todos os âmbitos da vida de um ser humano.<br/>
                Ser professor é ser um agente de transformação do conhecimento. O seu desafio diário é encontrar o<br/> melhor
                meio de alcançar seu objetivo, o qual é transmitir o conteúdo de forma clara e compreensível<br/> para o aluno.<br/>
                Ele é o elo entre o indivíduo e o saber.</li>
              
            </div>          
          </li>
          <div class="flex-container">
              <button class="botao">Inscreva-se</button>
            </div>
        </body>
      </ProfessorItemList>
      </ProfessorItemContainer>
    );
}