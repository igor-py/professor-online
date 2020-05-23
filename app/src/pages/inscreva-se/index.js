import React, { Component } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import '../../styles/inscreva.css';
import mulher_1 from '../../images/mulher1.png';
import mulher_2 from '../../images/mulher2.png';
import {
    Link
} from "react-router-dom";

export default function InscrevaSe() {
    return (
        <>
            <Header />
            <div id="inscrevaContainer">
                <div id="professorContainer">
                    <label>Professor</label>
                    <img src={mulher_1} alt="Mulher Experiente representando professora"></img>
                    <Link to="/inscreva-professor" className="links-inscrever">Seja um Professor</Link>
                </div>

                <div id="alunoContainer">
                    <label>Aluno</label>
                    <img src={mulher_2} alt="Mulher representando aluna"></img>
                    <Link to="/inscreva-aluno" className="links-inscrever">Seja um Aluno</Link>
                </div>
            </div>
            <Footer />
        </>
    );
}