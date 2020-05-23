import React, { Component } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import './style.css';
import mulher_1 from '../../images/mulher1.png';
import mulher_2 from '../../images/mulher2.png';

// Somente chamar categorias quando for cadastro de professor
const Categorias = () => {

    return (

        <fieldset className="inputs">
            <legend>Categoria</legend>
            <select>
                <option>Música</option>
                <option>WEB</option>
                <option>Graduação</option>
                <option>Finanças</option>
                <option>Mobile</option>
                <option>Banco de Dados</option>
                <option>Fotografia</option>
                <option>Gerenciamento</option>
            </select>
        </fieldset>
    )
};

const Inscrever = () => {

    return (

        <fieldset className="inputs">
            <label for="login">Nome</label>
            <input id="login" className="entradas" type="text" placeholder="Coloque aqui o seu nome e sobrenome"
                required></input>

            <label for="senha">Senha</label>
            <input id="senha" className="entradas" type="password" required placeholder="Coloque aqui a sua senha"></input>

            <label for="senha-repete">Repita a senha</label>
            <input id="senha-repete" className="entradas" type="password" required placeholder="Repita a senha"></input>

            <label for="email">E-mail</label>
            <input id="email" className="entradas" type="email" placeholder="Coloque aqui o seu G-mail"
                required></input>
        </fieldset>
    )
}


export default function InscrevaSe() {

    return (

        <div id="inscreva-se">
            <Header />

            <main>
                <div className="imagens-login">
                    <h3>Professor</h3>
                    <img src={mulher_1} alt="Mulher Experiente representando professora"></img>

                    <h3>Aluno</h3>
                    <img src={mulher_2} alt="Mulher representando aluna"></img>
                </div>
                
                <h2>Inscreva-Se</h2>

                <div className="inputs">
                    <Inscrever />

                    <Categorias className="entradas" />
                </div>

            </main>

            <Footer />
        </div>


    );
}
