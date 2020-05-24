import React, { useState, useEffect } from 'react';
import avatar from '../../images/avatar.png';
import { getCookie, eraseCookie, setCookie } from '../../utils/cookies';
import {
  ImagemContainer,
  Container,
  ContainerH1,
  H1,
  Botao,
  Main,
  Imagem,
  Pagecontainer,
  InnerContainer,
  UserName,
  Column,
  Rating,
} from './styles';

export default function Perfil() {
  const [userState, setUserState] = useState({});

  useEffect(() => {
    const user = JSON.parse(getCookie('user'));
    console.log(user);
    setUserState(user);
  }, []);

  function renderLogged() {
    return (
      <Pagecontainer>
        <InnerContainer>
          <ImagemContainer>
            <Imagem src={avatar} />
            <Column>
              <UserName>Ola, {userState.name}!</UserName>
              <Rating>★★★★★</Rating>
            </Column>
          </ImagemContainer>
        </InnerContainer>
      </Pagecontainer>
    );
  }

  return renderLogged();
}
