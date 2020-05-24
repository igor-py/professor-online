import React, { useState } from 'react';
import styled from 'styled-components';
import professor from '../../images/professor-eis.png';
import student from '../../images/student.png';

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

const Title = styled.div`
  font: 36px Arial;
  font-weight: bold;
  margin-bottom: 16px;
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
        <button
          onClick={() => {
            setHaveChosen(false);
          }}
        >
          voltar
        </button>
        <div>professor</div>
      </>
    );
  }

  function renderStudentSignUp() {
    return (
      <>
        <button
          onClick={() => {
            setHaveChosen(false);
          }}
        >
          voltar
        </button>
        <div>student</div>
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
