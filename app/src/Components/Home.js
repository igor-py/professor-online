import React, { Component } from 'react';
import '../styles/Home.css';
import business from '../images/business.jpg';
import homen_1 from '../images/homem1.png';
import homen_2 from '../images/homem2.png';
import ar_camera from '../images/ar-camera.png';
import base_de_dados from '../images/base-de-dados.png';
import codigo from '../images/codigo.png';
import fones from '../images/fones-de-ouvido.png';
import grupo from '../images/grupo.png';
import mercado from '../images/mercado.png';
import smartphone from '../images/smartphone.png';
import universidade from '../images/universidade.png';


class Home extends Component {

    state = {


    }

    render() {

        return (

            <div id="main-home">
                <main>
                    <h1>Professor Online</h1>

                    <input type="text" id="busca-curso" placeholder="Busque Aqui um Curso"></input>

                    <img src={business} alt="Representação dos Negócios" />

                    <div id="exemplo-professor">
                        <img src={homen_1} alt="Homem olhando pras nuvens"></img>
                        
                        <h3>Seja um Professor</h3>
                        <p>Seja um professor solidário em um momento em que há diversos estudantes precisando de você!
                        Seja um aluno</p>

                        <img src={homen_2} alt="Homem Sorrindo"></img>
                        <h3>Seja um Aluno</h3>
                        <p>
                            Este website é essencial se você está estudando por conta própria e quer tirar suas dúvidas. 
                            Aqui os professores te respondem de forma simples para que você não feche essa aba com dúvida.
                        </p>
                    </div>

                    <div id="fundo-logos">

                        <img src={fones} alt="Fones de Ouvido"></img>
                        <h4>Música</h4>

                        <img src={codigo} alt="Símbolo de Navegador"></img>
                        <h4>WEB</h4>

                        <img src={universidade} alt="Representação de Universitário"></img>
                        <h4>Graduação</h4>

                        <img src={mercado} alt="Representação do Mercado Financeiro"></img>
                        <h4>Finanças</h4>

                        <img src={smartphone} alt="Celular Smart"></img>
                        <h4>Mobile</h4>

                        <img src={base_de_dados} alt="Banco de Dados"></img>
                        <h4>Banco de Dados</h4>

                        <img src={ar_camera} alt="Câmera"></img>
                        <h4>Fotografia</h4>

                        <img src={grupo} alt="Três pessoas aleatórias"></img>
                        <h4>Gerenciamento</h4>
                    </div>

                </main>
            </div>
        )
    }
}

export default Home