import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin-top: 40px;
    display:    flex;
    flex-direction: column;
    align-items: center;
`;

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #222;
    padding: 20px;
    margin: 20px;
    border-radius: 12px;
`;

const H1 = styled.h1`
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

const ContainerH1 = styled.div`
    display: flex;
    flex-direction: row;
`;

const Botao = styled.button`
    margin: 10px 20px;
    border-radius: none;
    padding: 20px 15px;
    display: block;
    background-color: darkorange;
    position: relative;
    width: 60%;
    transition: 800ms;
    &:hover{
        background: darkred;
        transform: scale(1.02);
        font-size: 15px;
    }
`;

const ImagemContainer = styled.div`
    margin-top: 20px;
    display: absolute;
    left: 0;
    align-items: left;
`;

const Imagem = styled.img`
    width: 55px;
    height: 55px;
    &:hover{
        transform: scale(1.2);
    }
`;

export default function Perfil() {

    function renderLogged() {

        return (

            <>
                <ImagemContainer>
                    <H1>Avatar</H1>
                    <Imagem src="https://img.icons8.com/color/48/000000/ninja-turtle.png" />
                </ImagemContainer>
                
                <Container>
                    <Main>
                        <ContainerH1>
                            <H1>Igor Marins</H1>

                            <H1>Professor</H1>
                        </ContainerH1>

                        <Botao onClick={() => { alert('Mudar informações do perfil') }}>Editar Perfil</Botao>
                        <Botao onClick={() => { alert('Mudar Avatar') }}>Mudar Avatar</Botao>
                    </Main>
                </Container>
            </>
        )
    };

    return renderLogged();

}

