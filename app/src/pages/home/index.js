import React, { Component } from 'react';
import '../../styles/Home.css';
import business from '../../images/business.jpg';
import homen_1 from '../../images/homem1.png';
import homen_2 from '../../images/homem2.png';
import matematica from '../../images/matematica.png';
import portugues from '../../images/portugues.png';
import ingles from '../../images/ingles.png';
import geografia from '../../images/geografia.png';
import historia from '../../images/historia.png';
import fisica from '../../images/fisica.png';
import quimica from '../../images/quimica.png';
import biologia from '../../images/biologia.png';

class Home extends Component {
  state = {};

  render() {
    return (
      <div id="main-home">
        <main>
          <h1>Professor Online</h1>

          <img
            src={business}
            id="imagem_principal"
            alt="Representação dos Negócios"
          />

          <div id="exemplo-professor">
            <img src={homen_1} alt="Professor"></img>

            <div>
              <h2>Seja um Professor</h2>
              <p1>
                Seja um agente de transformação do conhecimento.
                <br /> Há nesse momento diversos alunos que precisam de sua
                <br /> ajuda. Seu desafio será transmitir, de forma clara
                <br /> e compreensível, o conteúdo para o aluno.
                <br /> Seja o elo entre o indivíduo e o saber.
              </p1>
            </div>
          </div>

          <div id="exemplo-aluno">
            <div>
              <h2>Seja um Aluno</h2>
              <br />
              <br />
              <br />
              <p>
                Este website é essencial se você está
                <br />
                estudando por conta própria e quer tirar
                <br /> suas dúvidas. Aqui os professores te respondem
                <br /> de forma simples para que você não feche
                <br />
                essa aba com dúvida.
              </p>
            </div>

            <img src={homen_2} alt="Aluno" />
          </div>

          <div id="fundo-logos">
            <div>
              <img src={matematica} alt="Matemática" />
              <h4>Matemática</h4>
                 
              <img src={portugues} alt="Português" />
              <h4>Português</h4>
            </div>

            <div>
              <img src={historia} alt="História" />
              <h4 class="img-historia">História</h4>

              <img src={ingles} alt="Inglês" />
              <h4 class="img-right">Inglês</h4>
            </div>

            <div>
              <img src={geografia} alt="Geografia" />
              <h4>Geografia</h4>

              <img  src={fisica} alt="Física" />
              <h4 class="img-right">Física</h4>
            </div>

            <div>
              <img src={quimica} alt="Química" />
              <h4>Química</h4>

              <img src={biologia} alt="Biologia" />
              <h4>Biologia</h4>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Home;
