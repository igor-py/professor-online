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
`;

const Image = styled.img`
  border: 2px solid #999;
  border-radius: 140px;
  height: 280px;
  width: 280px;
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
  padding: 40px;
`;

const FormText = styled.div`
  font: 18px Arial;
  color: #fff;
  align-self: flex-start;
  margin-top: 20px;
`;

const FormField = styled.input`
  background-color: #fff;
  border-radius: 8px;
  width: 95%;
  margin-top: 10px;
  outline: none;
  font: 18px Arial;
  font-weight: bold;
  padding-right: 8px;
  padding-left: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
`;

const FormFragment = styled.div`
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Title = styled.div`
  font: 36px Arial;
  font-weight: bold;
  margin-bottom: 16px;
`;

const Button = styled.button`
  margin: 16px;
  font: 24px Arial;
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
            voltar
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
            voltar
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
