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
    font-size: 20px;
    margin: 0 20px;
    align-items: center;
    border: 0.5px white solid;
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
    margin: 20px 20px;
    border-radius: none;
    padding: 20px 15px;
    display: block;
    background-color: lightcoral;
    position: relative;
    width: 100%;
`;

const ImagemContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: left;
`;

const Imagem = styled.img`
    width: 50px;
    height: 50px;
`;

export default function Perfil() {

    function renderLogged() {

        return (

            <>
                <Container>
                    <ImagemContainer>
                        <H1>Avatar</H1>
                        <Imagem src="https://img.icons8.com/color/48/000000/ninja-turtle.png" />
                    </ImagemContainer>
                    
                    <H1>Perfil</H1>
                    <Main>
                        <ContainerH1>
                            <H1>Igor Marins</H1>

                            <H1>Professor</H1>
                        </ContainerH1>

                        <Botao onClick={()=>{console.log('cliquei')}}>Editar Perfil</Botao>
                    </Main>
                </Container>
            </>
        )
    };

    return renderLogged();

}

