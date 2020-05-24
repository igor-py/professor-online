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
`;

const H1 = styled.h1`
    font-size: 20px;
    margin: 0 20px;
    align-items: center;
    border: 0.5px black solid;
    padding: 8px;
    
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
    border: 0.5px black solid;
    border-radius: none;
    padding: 8px;
`;

export default function Perfil() {

    const [isLogged, setIsLogged] = useState(true);

    function renderLogged() {

        return (

            <>
                <Container>
                    <Main>

                        <ContainerH1>
                            <H1>Igor Marins</H1>

                            <H1>Professor</H1>
                        </ContainerH1>

                        <Botao>Teste</Botao>
                    </Main>
                </Container>
            </>
        )
    };

    return renderLogged();

}

