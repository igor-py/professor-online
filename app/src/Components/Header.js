import React from 'react';
import '../styles/Header.css';
import professor from '../images/professor.png'

export default function Header(){
    return (
        
      

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

      
    );
}