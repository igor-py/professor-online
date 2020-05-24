import React, { Component } from 'react';
import User from '../../Components/User';
import '../../styles/pesquisa.css';
import proffLogo from '../../images/professor.png'
import api from '../../services/api';

export default class Pesquisa extends Component {
  state = {
    newUser: '',
    users: [],
  };

  handleInputChange = e => {
    this.setState({ 
      newUser: e.target.value
    })
  }

  handleSubmit = async e => {
    e.preventDefault();

    const { newUser } = this.state

    const response = await api.post({
      data: {
        tags: newUser
      }
    })

    this.setState({
      users: [...response],
      newUser: '',
    })
  }

  render() {
    const { users, newUser } = this.state;
    return (
      <div>
        <div id="tituloContainer">
          <img src={proffLogo}/>
          <form id="submitContainer" onSubmit={this.handleSubmit}>
            <input type="text" 
              placeholder="Busque Aqui um Curso"
              value={newUser}
              onChange={this.handleInputChange}
            />
            <div id="submitButton">
              <button type="submit"/>
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
