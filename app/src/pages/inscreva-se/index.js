import React, { Component } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import './style.css';

export default function InscrevaSe() {

    return (



        <div id="inscreva-se">
            <Header />

            <main>
                <h2>Inscreva-Se</h2>

                <div id="inputs">
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

                    <label className="checkbox">
                    <input type="checkbox"></input> Marque apenas se for professor
                    </label>
                </div>

            </main>

            <Footer />
        </div>


    );
}
