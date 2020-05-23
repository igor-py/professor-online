import React from 'react';
import '../styles/Header.css';
import professor from '../images/professor.png'

export default function Header(){
    return (
        
        <header id= "caixa-header">

            <div>
                
                <img src= {professor} alt= "Professor Online"/>    
                
                <label>Entrar</label>    
                <label>Inscreva-se</label>
                <label>Seja um Professor</label>
                
                
            </div>  
        </header>

        /*
        <div id = 'caixa-header'>
            <div>
                <img src= {professor} alt="Professor"/>
            </div>

            <div id= 'div-header'>
                <label>Seja um Professor</label>
                <label>Inscreva-se</label>
                <label>Entrar</label>                       
            </div>
        </div>
        */
      
    );
}