import React from 'react';
import './Header.css';
import professor from '../../images/professor.png'

export default function Header(){
    return (
                
        <header className="header">

            <div className="caixa">
                <nav className="paginas">



                    <label>Seja um Professor</label>
                    <label>Quem Somos</label>
                    <label>Inscreva-se</label>
                    <label>Entrar</label>
                </nav>
            </div>

        </header>
    );
}