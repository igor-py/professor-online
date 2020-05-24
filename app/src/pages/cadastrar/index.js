import React, { useState } from 'react';
import styled from 'styled-components';
import professor from '../../images/professor-eis.png';
import student from '../../images/student.png';
import professor2 from '../../images/professor.png';

const Container = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex: 1;
  margin:10% 20% 0% 20%;
`;

const Image = styled.img`
  border: 2px solid #999;
  border-radius: 150px;
  height: 13vw;
  width:13vw ;
`;

const Icon = styled.img`
  height: 150px;
  width: 150px;
  margin: 20px;
`;

const EntityContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
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
  font-size:1vw;
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  color: #fff;
  align-self: flex-start;
  margin-top: 20px;
`;

const FormField = styled.input`
  background-color: #fff;
  border-radius: 8px;
  width: 80%;
  margin-left:7%;
  margin-top: 10px;
  outline: none;
  color:#262626;
  font-family: 1vw Verdana, Geneva, Tahoma, sans-serif;
  padding: 4px 8px 4px 8px;
`;

const FormFragment = styled.div`
  flex-direction: column;
  align-items: center;
  width: 80%;
`;

const Title = styled.div`
  font:1.5vw Verdana, Geneva, Tahoma, sans-serif;
  font-weight: lighter;
  margin-bottom: 16px;
  text-align: center;
  margin-left:20px;
`;

const Button = styled.button`
  margin: 16px;
  font:1vw Verdana, Geneva, Tahoma, sans-serif;
  outline: none;
  text-decoration: none;
  height: 42px;
  width: 90px;
  border-radius: 21px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #555;
    cursor: pointer;
  }
`;

export default function Cadastrar() {
  const [haveChosen, setHaveChosen] = useState(false);
  const [isProfessor, setIsProfessor] = useState();

  function renderOptions() {
    return (
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
              <FormField />
            </FormFragment>
            <FormFragment>
              <FormText>E-mail:</FormText>
              <FormField />
            </FormFragment>
            <FormFragment>
              <FormText>Senha:</FormText>
              <FormField />
            </FormFragment>
            <FormFragment>
              <FormText>Turno:</FormText>
              <FormField />
            </FormFragment>
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
              <FormField />
            </FormFragment>
            <FormFragment>
              <FormText>E-mail:</FormText>
              <FormField />
            </FormFragment>
            <FormFragment>
              <FormText>Senha:</FormText>
              <FormField />
            </FormFragment>
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
