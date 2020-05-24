import React, { Component } from 'react';
import User from '../../Components/User';
import '../../styles/pesquisa.css';
import proffLogo from '../../images/professor.png';
import api from '../../services/api';

export default class Pesquisa extends Component {
  state = {
    newUser: '',
    users: [
      {
        id: 1,
        name: 'Igor Marins',
        email: 'igor@gmail.com',
        password: '12345',
        isTeacher: true,
        turn: 'manhã',
        rating: 5,
        aula: 'português',
      },
      {
        id: 2,
        name: 'Douglas Toledo',
        email: 'douglas@gmail.com',
        password: '12345',
        isTeacher: true,
        turn: 'tarde',
        rating: 4.3,
        aula: 'matemática',
      },
      {
        id: 3,
        name: 'Leandro Trindade',
        email: 'leandro@gmail.com',
        password: '12345',
        isTeacher: true,
        turn: 'tarde',
        rating: 3.9,
        aula: 'react',
      },
      {
        id: 4,
        name: 'Vitão da Massa',
        email: 'vitor@gmail.com',
        password: '12345',
        isTeacher: true,
        turn: 'tarde',
        rating: 3.3,
        aula: 'react',
      },
    ],
  };

  handleInputChange = (e) => {
    this.setState({
      newUser: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { newUser } = this.state;

    const response = await api.post({
      data: {
        tags: newUser,
      },
    });

    this.setState({
      users: [...response],
      newUser: '',
    });
  };

  render() {
    const { users, newUser } = this.state;
    return (
      <div id="parentContainer">
        <div id="tituloContainer">
          <img src={proffLogo} />
          <form id="submitContainer" onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Busque Aqui um Curso"
              value={newUser}
              onChange={this.handleInputChange}
            />
            <div id="submitButton">
              <button type="submit" />
            </div>
          </form>
        </div>
        <ul id="pesquisaList">
          {users.map((user) => (
            <User key={user} user={user} />
          ))}
        </ul>
      </div>
    );
  }
}
