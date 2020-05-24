import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 40px;
    display:    flex;
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
    
    &:hover{
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
    &:hover{
        background: darkred;
        transform: scale(1.02);
        font-size: 15px;
    }
`;

export const ImagemContainer = styled.div`
    margin-top: 20px;
    display: absolute;
    left: 0;
    align-items: left;
`;

export const Imagem = styled.img`
    width: 55px;
    height: 55px;
    &:hover{
        transform: scale(1.2);
    }
`;