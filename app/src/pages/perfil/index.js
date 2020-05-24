import React, { useState } from 'react';
import {ImagemContainer, Container, ContainerH1,
H1, Botao, Main, Imagem} from './styles';



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

                        <H1>★★★★★</H1>

                        <Botao onClick={() => { alert('Mudar informações do perfil') }}>Editar Perfil</Botao>
                        <Botao onClick={() => { alert('Mudar Avatar') }}>Mudar Avatar</Botao>
                    </Main>
                </Container>
            </>
        )
    };

    return renderLogged();

}

