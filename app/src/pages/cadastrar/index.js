import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import professor from '../../images/professor-eis.png';
import student from '../../images/student.png';
import professor2 from '../../images/professor.png';
import { config } from '../../config';
import { setCookie } from '../../utils/cookies';

const Container = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex: 1;
  margin: 10% 20% 0% 20%;
`;

const Image = styled.img`
  border: 2px solid #999;
  border-radius: 150px;
  height: 13vw;
  width: 13vw;
`;

const Icon = styled.img`
  height: 150px;
  width: 150px;
  margin: 20px;
`;

const Main_title = styled.div`
  display:flex;
  color:#262626;
  justify-content:center;
  margin:10% 0% 10% 0%;
  font: 1.8vw Verdana, Geneva, Tahoma, sans-serif;
`;

const EntityContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
    transform: scale(1.1);
    transition: 0.5s;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #222;
  border-radius: 16px;
  width: 480px;
  height: 100%;
  padding: 10px 0px 50px 0px;
`;

const FormText = styled.div`
  font-size: 1vw;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #fff;
  align-self: flex-start;
  margin-top: 20px;
`;

const FormField = styled.input`
  background-color: #fff;
  border-radius: 8px;
  width: 80%;
  margin-left: 7%;
  margin-top: 10px;
  outline: none;
  color: #262626;
  font-family: 1vw Verdana, Geneva, Tahoma, sans-serif;
  padding: 4px 8px 4px 8px;
`;

const FormFragment = styled.div`
  flex-direction: column;
  align-items: center;
  width: 80%;
`;

const Container1 = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: center;

`;

const Title = styled.div`
  font: 1.5vw Verdana, Geneva, Tahoma, sans-serif;
  font-weight: lighter;
  margin-bottom: 16px;
  text-align: center;
  margin-left: 20px;
`;

const Button = styled.button`
  margin: 16px;
  font: 1vw Verdana, Geneva, Tahoma, sans-serif;
  outline: none;
  text-decoration: none;
  height: 42px;
  width: 90px;
  border-radius: 8px;
  transition: all 0.8s;

  &:hover {
    background-color: #d13330;
    color: white;
    cursor: pointer;
  }
`;

const SubmmitButton = styled.button`
  background-color: #222;
  margin-top: 10%;
  font: 1.1vw Verdana, Geneva, Tahoma, sans-serif;
  outline: none;
  text-decoration: none;
  height: 42px;
  width: 150px;
  border: 2px solid #fff;
  border-radius: 8px;
  transition: all 0.8s;
  color: white;

  &:hover {
    background-color: #e6e6e6;
    cursor: pointer;
    color: #262626;
  }
`;

const Select = styled.select`
  margin: 16px 16px 0 16px;
  font: 0.8vw Verdana, Geneva, Tahoma, sans-serif;
  border: 2px solid #fff;
  border-radius: 4px;
  background-color: #222;
  color: #fff;
`;

export default function Cadastrar() {
  const [haveChosen, setHaveChosen] = useState(false);
  const [isProfessor, setIsProfessor] = useState();

  async function logIn(email, password) {
    let response;

    try {
      response = await axios({
        method: 'post',
        url: `${config.SERVER_URL}/sessions`,
        data: {
          email,
          password,
        },
        crossDomain: true,
      });
    } catch (e) {
      alert('Ocorreu um erro no login, tente novamente!');
      return;
    }

    console.log('login ', response);

    setCookie('user', JSON.stringify(response.data.user), 7);
    setCookie('auth', response.data.token, 7);
    window.location.reload();
    window.location.href = '/';
  }

  async function cadastrarAluno() {
    let response;

    const name = document.getElementById('s-name').value;
    const email = document.getElementById('s-email').value;
    const password = document.getElementById('s-pw').value;
    const passwordConfirmation = document.getElementById('s-cpw').value;

    if (password !== passwordConfirmation) {
      alert('Confirmação de senha incorreta!');
      return;
    }

    try {
      response = await axios({
        method: 'post',
        url: `${config.SERVER_URL}/users`,
        data: {
          name,
          email,
          password,
          isTeacher: false,
          turn: 'student',
          tags: [],
        },
        crossDomain: true,
      });
    } catch (e) {
      alert('Ocorreu um erro ao cadastrar, tente novamente!');
      return;
    }

    console.log('cadastro ', response);

    await logIn(email, password);
  }

  async function cadastrarProfessor() {
    let response;

    const name = document.getElementById('p-name').value;
    const email = document.getElementById('p-email').value;
    const password = document.getElementById('p-pw').value;
    const passwordConfirmation = document.getElementById('p-cpw').value;
    const turn = document.getElementById('turn').value;
    const tags = Number(document.getElementById('tag').value);

    if (password !== passwordConfirmation) {
      alert('Confirmação de senha incorreta!');
      return;
    }

    try {
      response = await axios({
        method: 'post',
        url: `${config.SERVER_URL}/users`,
        data: {
          name,
          email,
          password,
          isTeacher: true,
          turn: turn,
          tags: [tags],
        },
        crossDomain: true,
      });
    } catch (e) {
      alert('Ocorreu um erro ao cadastrar, tente novamente!');
      return;
    }

    console.log('cadastro ', response);

    await logIn(email, password);
  }

  function renderOptions() {
    return (

      <Container1>
        <Container>
          <EntityContainer
            onClick={() => {
              setHaveChosen(true);
              setIsProfessor(true);
            }}
          >
            <Title>Sou um professor</Title>
            <Image src={professor} alt="professor"></Image>
          </EntityContainer>

          <EntityContainer
            onClick={() => {
              setHaveChosen(true);
              setIsProfessor(false);
            }}
          >
            <Title>Sou um aluno</Title>
            <Image src={student} alt="student"></Image>
          </EntityContainer>
        </Container>

        <Main_title>
          Faça parte desse time!
        </Main_title>
      </Container1>

    );
  }

  function renderProfessorSignUp() {
    return (
      <>
        <FormContainer>
          <Icon src={professor2} alt="professor 2" />
          <Title>Olá, professor!</Title>
          <FormBackground>
            <FormFragment>
              <FormText placeholder="Coloque seu nome completo">Nome:</FormText>
              <FormField id="p-name" />
            </FormFragment>
            <FormFragment>
              <FormText>E-mail:</FormText>
              <FormField id="p-email" />
            </FormFragment>
            <FormFragment>
              <FormText>Senha:</FormText>
              <FormField id="p-pw" type="password" />
            </FormFragment>
            <FormFragment>
              <FormText>Confirme sua senha:</FormText>
              <FormField id="p-cpw" type="password" />
            </FormFragment>
            <FormFragment>
              <FormText>Turno:</FormText>
              <Select id="turn" name="turnos">
                <option value="manha">Manhã</option>
                <option value="tarde">Tarde</option>
                <option value="noite">Noite</option>
              </Select>
            </FormFragment>
            <FormFragment>
              <FormText>Voce gostaria de lecionar sobre que assunto?</FormText>
              <Select id="tag" name="tags">
                <option value="1">Matemática</option>
                <option value="2">Português</option>
                <option value="3">História</option>
                <option value="4">Geografia</option>
                <option value="5">Biologia</option>
                <option value="6">Inglês</option>
                <option value="7">Física</option>
                <option value="8">Química</option>
                <option value="9">Filosofia</option>
                <option value="10">Literatura</option>
                <option value="11">Artes</option>
              </Select>
            </FormFragment>
            <SubmmitButton onClick={cadastrarProfessor}>
              Cadastrar
            </SubmmitButton>
          </FormBackground>
          <Button
            onClick={() => {
              setHaveChosen(false);
            }}
          >
            Voltar
          </Button>
        </FormContainer>
      </>
    );
  }

  function renderStudentSignUp() {
    return (
      <>
        <FormContainer>
          <Icon src={professor2} alt="professor 2" />
          <Title>Olá, aluno!</Title>
          <FormBackground>
            <FormFragment>
              <FormText>Nome:</FormText>
              <FormField id="s-name" />
            </FormFragment>
            <FormFragment>
              <FormText>E-mail:</FormText>
              <FormField id="s-email" />
            </FormFragment>
            <FormFragment>
              <FormText>Senha:</FormText>
              <FormField id="s-pw" type="password" />
            </FormFragment>
            <FormFragment>
              <FormText>Confirme sua senha:</FormText>
              <FormField id="s-cpw" type="password" />
            </FormFragment>
            <SubmmitButton onClick={cadastrarAluno}>Cadastrar</SubmmitButton>
          </FormBackground>
          <Button
            onClick={() => {
              setHaveChosen(false);
            }}
          >
            Voltar
          </Button>
        </FormContainer>
      </>
    );
  }

  function renderSignUp() {
    return (
      <> {isProfessor ? renderProfessorSignUp() : renderStudentSignUp()} </>
    );
  }

  return <>{haveChosen ? renderSignUp() : renderOptions()}</>;
}
