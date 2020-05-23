import React, {Component} from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

class Pesquisa extends Component {

    state = {

        users: [
            {
                name: "Igor Marins",
                email: "igor@gmail.com",
                password: "12345",
                isTeacher: true,
                turn: "manhã",
                rating: 5
              },
              {
                name: "Douglas Toledo",
                email: "douglas@gmail.com",
                password: "12345",
                isTeacher: true,
                turn: "tarde",
                rating: 4.3
              },
              {
                name: "Leandro Trindade",
                email: "leandro@gmail.com",
                password: "12345",
                isTeacher: true,
                turn: "tarde",
                rating: 3.9
              },
              {
                name: "Vitão da Massa",
                email: "vitor@gmail.com",
                password: "12345",
                isTeacher: true,
                turn: "tarde",
                rating: 3.3
              },

        ],

    }

    componentDidMount(){

      const {users} = this.state;
      console.log(users);
    }
    
    render(){
        
        return (
            <div id="principal-pesquisa">
                <Header/>

                <Footer/>
            </div>
        );
    }
}

export default Pesquisa;