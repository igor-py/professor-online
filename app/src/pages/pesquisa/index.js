import React, {Component} from 'react';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import User from '../../Components/User'
import '../../styles/pesquisa.css'

export default class Pesquisa extends Component {

    state = {
        users: [
            {
                id: 1,
                name: "Igor Marins",
                email: "igor@gmail.com",
                password: "12345",
                isTeacher: true,
                turn: "manhã",
                rating: 5,
                aula: "português"
              },
              {
                id: 2,
                name: "Douglas Toledo",
                email: "douglas@gmail.com",
                password: "12345",
                isTeacher: true,
                turn: "tarde",
                rating: 4.3,
                aula: "português"
              },
              {
                id: 3,
                name: "Leandro Trindade",
                email: "leandro@gmail.com",
                password: "12345",
                isTeacher: true,
                turn: "tarde",
                rating: 3.9,
                aula: "português"
              },
              {
                id: 4,
                name: "Vitão da Massa",
                email: "vitor@gmail.com",
                password: "12345",
                isTeacher: true,
                turn: "tarde",
                rating: 3.3,
                aula: "português"
              },
        ],
    }
    
    render(){
        return (
            <div>
                <Header />
                <div id = "tituloContainer">
                  <label>Resultados de pesquisa para Português</label>
                </div>
                  <ul id = "pesquisaList">
                    {this.state.users.map(user => <User key = {user} user = {user} />)}
                  </ul>
                  
                <Footer/>
            </div>
        );
    }
}
