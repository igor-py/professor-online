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
import Footer from './Footer';
import Header from './Header';


class Home extends Component {

    state = {


    }

    render() {

        return (


            <div id="main-home">

                <Header />

                <main>
                    <h1>Professor Online</h1>

                    <input type="text" placeholder="Busque Aqui um Curso"/>

                   
                    <img src={business} id="imagem_principal" alt="Representação dos Negócios" />

                    <div id="exemplo-professor">
                        
                        <img src={homen_1} alt="Professor"></img>

                        <div>
                            <h2>Seja um Professor</h2><br/>
                            <p>Seja um professor solidário em um<br/> momento em que há diversos estudantes<br/> precisando de você!</p>
                        </div>
                        
                    </div>

                    <div id="exemplo-aluno">
                        
                        <div>
                            <h2>Seja um Aluno</h2><br/><br/>
                            <p>Este website é essencial se você está<br/> estudando por conta própria e quer tirar<br/> suas dúvidas. Aqui os professores te respondem<br/> de forma simples para que você não feche<br/> essa aba com dúvida.</p>
                        </div>

                        <img src={homen_2} alt="Aluno"/>
                        
                    </div>
 
                    <div id="fundo-logos">

                        <div >
                            
                            <img src={fones} alt="Música"/>
                            <h4>Música</h4>
                            
                            <img src={codigo} alt="WEB"/>
                            <h4>WEB</h4>
                            
                        </div>

                        <div>
                            
                            <img src={universidade} alt="Graduação"/>
                            <h4>Graduação</h4>
                            
                            <img src={mercado} alt="Finanças"/>
                            <h4>Finanças</h4>
                            
                        </div>

                        <div>
                            <img src={smartphone} alt="Mobile"/>
                            <h4>Mobile</h4>

                            <img src={base_de_dados} alt="Banco de Dados"/>
                            <h4>Banco de <br/>Dados</h4>
                        </div>

                        <div>
                            <img src={ar_camera} alt="Fotografia"/>
                            <h4>Fotografia</h4>

                            <img src={grupo} alt="Gerenciamento"/>
                            <h4>Gerenciamento</h4>
                        </div>
                    </div>

                </main>


                <Footer />
            </div>
        )
    }
}

export default Home