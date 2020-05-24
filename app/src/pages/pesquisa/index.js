import React, { Component } from 'react';
import User from '../../Components/User';
import '../../styles/pesquisa.css';
import proffLogo from '../../images/professor.png';
import { StringUtils } from '../../utils/stringUtils';
import api from '../../services/api';

export default class Pesquisa extends Component {
  state = {
    newUser: '',
    users: [],
    storageUsers: [
      {
        id: 1,
        name: 'Igor Marins',
        email: 'igor@gmail.com',
        password: '12345',
        isTeacher: true,
        turn: 'manhã',
        rating: 5,
        aula: 'Português',
        uniqueAula: 'portugues'
      },
      {
        id: 2,
        name: 'Douglas Toledo',
        email: 'douglas@gmail.com',
        password: '12345',
        isTeacher: true,
        turn: 'tarde',
        rating: 4.3,
        aula: 'Matemática',
        uniqueAula: 'matematica'
      },
      {
        id: 3,
        name: 'Leandro Trindade',
        email: 'leandro@gmail.com',
        password: '12345',
        isTeacher: true,
        turn: 'tarde',
        rating: 3.9,
        aula: 'React',
        uniqueAula: 'react'
      },
      {
        id: 4,
        name: 'Vitão da Massa',
        email: 'vitor@gmail.com',
        password: '12345',
        isTeacher: true,
        turn: 'tarde',
        rating: 3.3,
        aula: 'React',
        uniqueAula: 'react'
      },
      {
        id: 5,
        name: 'Lucas Neto',
        email: 'Lucas.dindinho@gmail.com',
        password: '12345',
        isTeacher: false,
        turn: 'tarde',
        rating: 3.3,
        aula: 'React',
        uniqueAula: 'react'
      },
      {
        id: 6,
        name: 'Felipe Neto',
        email: 'felipe.neto@gmail.com',
        password: '12345',
        isTeacher: true,
        turn: 'tarde',
        rating: 5,
        aula: 'Digital Influencer',
        uniqueAula: 'digital influencer'
      },
      {
        id: 7,
        name: 'Maria Paula',
        email: 'maria.paula@gmail.com',
        password: '12345',
        isTeacher: true,
        turn: 'tarde',
        rating: 4.3,
        aula: 'Digital Influencer',
        uniqueAula: 'digital influencer'
      },
      {
        id: 8,
        name: 'Ava Taylor',
        email: 'Ava.taylor@gmail.com',
        password: '12345',
        isTeacher: true,
        turn: 'tarde',
        rating: 3.9,
        aula: 'Relacionamentos',
        uniqueAula: 'relacionamentos'
      },
      {
        id: 9,
        name: 'João Dória',
        email: 'João.doria@gmail.com',
        password: '12345',
        isTeacher: true,
        turn: 'tarde',
        rating: 3.3,
        aula: 'Políticas Públicas',
        uniqueAula: 'politicas publicas'
      }]
  };

  handleInputChange = (e) => {
    this.setState({
      newUser: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { newUser, storageUsers } = this.state

    const response = storageUsers.filter(
      user => user.uniqueAula === StringUtils.replaceAllSpecialCharactersAndSetLowerCase(newUser) 
      && user.isTeacher === true
    )

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
