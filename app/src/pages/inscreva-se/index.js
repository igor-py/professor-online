import React, { Component } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import './style.css';
import mulher_1 from '../../images/mulher1.png';
import mulher_2 from '../../images/mulher2.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


export default function InscrevaSe() {

    return (

        // Ainda falta colocar botões para conseguir ir pra página de cadastro certa
        <div id="inscreva-se">
            <Header />

            <main>
                <div className="imagens-login">
                    <div className="ir-professor">
                        <h3>Professor</h3>
                        <img src={mulher_1} alt="Mulher Experiente representando professora"></img>
                        <Link to="/inscreva-professor" className="links-inscrever">Seja um Professor!!!</Link>
                    </div>

                    <div className="ir-aluno">
                        <h3>Aluno</h3>
                        <img src={mulher_2} alt="Mulher representando aluna"></img>
                        <Link to="/inscreva-aluno" className="links-inscrever">Seja um Aluno!!!</Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>


    );
}