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
        
        <header id= "caixa-header">

            <div>
                
                <img src= {professor} alt= "Professor Online"/>    
                
                
                <label>Entrar</label>    
                <Link to="/inscreva-se" className="links-header">Inscreva-se</Link>
                <label>Seja um Professor</label>
                
                
            </div>  
        </header>

      
    );
}
