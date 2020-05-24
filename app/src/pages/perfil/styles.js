import styled from 'styled-components';

export const Pagecontainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-items: center;
`;

export const InnerContainer = styled.div`
  width: 70%;
`;

export const Container = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #222;
  padding: 20px;
  margin: 20px;
  border-radius: 12px;
`;

export const H1 = styled.h1`
  font-size: 22px;
  margin: 0 20px;
  align-items: center;
  padding: 8px;
  color: #eb423f;
  font-weight: bold;
  font-family: Verdana, Geneva, Tahoma, sans-serif;

  &:hover {
    opacity: 0.7;
  }
`;

export const ContainerH1 = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Botao = styled.button`
  margin: 10px 20px;
  border-radius: none;
  padding: 20px 15px;
  display: block;
  background-color: darkorange;
  position: relative;
  width: 60%;
  transition: 500ms;
  &:hover {
    background: darkred;
    transform: scale(1.02);
    font-size: 15px;
  }
`;

export const ImagemContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  left: 0;
  align-items: center;
`;

export const UserName = styled.div`
  font: 24px Arial;
  font-weight: bold;
  color: #111;
`;

export const Rating = styled.div`
  font: 24px Arial;
  color: orange;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Imagem = styled.img`
  height: 100px;
  width: 100px;
  border: 4px solid #b66;
  border-radius: 8px;
  margin-right: 30px;
`;
