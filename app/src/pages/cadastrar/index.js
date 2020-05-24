import React from 'react';
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
  return (
    <>
      <Container>
        <EntityContainer>
          <Title>Sou um professor</Title>
          <Image src={professor} alt="professor"></Image>
        </EntityContainer>

        <EntityContainer>
          <Title>Sou um aluno</Title>
          <Image src={student} alt="student"></Image>
        </EntityContainer>
      </Container>
    </>
  );
}
