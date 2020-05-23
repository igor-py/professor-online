import React from 'react';
import '../styles/Header.css';
import professor from '../images/professor.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function Header(){
    return (
        <div id="headerContainer">
            <div id="logoContainer">
                <img src= {professor} alt= "Professor Online" />
            </div>
            <div id="labelContainer">
                <Link to="/entrar" className="links-header" >Entrar</Link>
                <Link to="/sejaumprofessor" className="links-header">Seja um professor</Link>
                <Link to="/inscreva-se" className="links-header">Inscreva-se</Link>
            </div>
        </div>
    );
}
