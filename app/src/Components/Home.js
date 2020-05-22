import React, { Component } from 'react';
import '../styles/Home.css';
import business from '../images/business.jpg';


class Home extends Component {

    state = {


    }

    render() {

        return (

            <div id="main-home">
                <main>
                    <h1>Professor Online</h1>
    
                    <input type="text" id="busca-curso" placeholder="Busque Aqui um Curso"></input>

                    <img src= {business} alt= "Representação dos Negócios"/>

                    <p>Sunt aliquip quis ad exercitation aute enim. Veniam aliqua non id ea minim anim laborum ut irure ad tempor sunt.
                        Qui tempor aliquip occaecat proident fugiat duis fugiat pariatur.</p>
                </main>
            </div>
        )
    }
}

export default Home