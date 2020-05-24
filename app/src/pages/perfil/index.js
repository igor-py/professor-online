import React, { useState, useEffect } from 'react';
import avatar from '../../images/avatar.png';
import { getCookie, eraseCookie, setCookie } from '../../utils/cookies';
import {
  ImagemContainer,
  Imagem,
  Pagecontainer,
  InnerContainer,
  UserName,
  Column,
  Rating,
  LeftContainer,
  RightContainer,
  UserInfo,
  BoldText,
  EmailContainer,
  VerticalLine,
  HorizontalLine,
  MessagesContainer,
  MessagesHeader,
  MessageContainer,
  MessageTextContainer,
  MessageTitle,
  MessageText,
  MessageAvatar,
} from './styles';

const categoryArray = [
  'Nenhuma',
  'Matemática',
  'Português',
  'História',
  'Geografia',
  'Biologia',
  'Inglês',
  'Física',
  'Química',
  'Filosofia',
  'Literatura',
  'Artes',
];

export default function Perfil() {
  const [userState, setUserState] = useState({});

  useEffect(() => {
    const user = JSON.parse(getCookie('user'));
    console.log(user);
    setUserState(user);
  }, []);

  function renderStudentInfo() {
    return (
      <UserInfo>
        Você está cadastrado como estudante. Procure por professores para marcar
        uma aula!
        <EmailContainer>
          <BoldText>Email cadastrado:</BoldText>
          {` ${userState.email}`}
        </EmailContainer>
      </UserInfo>
    );
  }

  function renderTeacherInfo() {
    return (
      <UserInfo>
        Você está cadastrado como professor.
        <EmailContainer>
          <BoldText>Email cadastrado:</BoldText>
          {` ${userState.email}`}
        </EmailContainer>
        <EmailContainer>
          <BoldText>Turno:</BoldText>
          {` ${userState.turn}`}
        </EmailContainer>
        <EmailContainer>
          <BoldText>Categoria de aulas:</BoldText>
          {
            categoryArray[
              userState
                ? userState.tags
                  ? userState.tags[0]
                    ? userState.tags[0].tagid
                    : 0
                  : 0
                : 0
            ]
          }
        </EmailContainer>
      </UserInfo>
    );
  }

  function renderLogged() {
    return (
      <Pagecontainer>
        <InnerContainer>
          <LeftContainer>
            <ImagemContainer>
              <Imagem src={avatar} />
              <Column>
                <UserName>Ola, {userState.name}!</UserName>
                <Rating>★★★★★</Rating>
              </Column>
            </ImagemContainer>
            {userState.isteacher ? renderTeacherInfo() : renderStudentInfo()}
          </LeftContainer>
          <VerticalLine />
          <RightContainer>
            <MessagesHeader>Últimas Mensagens</MessagesHeader>
            <MessagesContainer>
              <MessageContainer>
                <MessageAvatar src={avatar} alt="ava1" />
                <MessageTextContainer>
                  <MessageTitle>Igor Marins</MessageTitle>
                  <MessageText>
                    > Oi, Douglas! Podemos marcar uma aula?
                  </MessageText>
                </MessageTextContainer>
              </MessageContainer>
              <HorizontalLine />
              <MessageContainer>
                <MessageAvatar src={avatar} alt="ava2" />
                <MessageTextContainer>
                  <MessageTitle>Vitor Santos</MessageTitle>
                  <MessageText>
                    > Obrigado pela aula de ontem, muito boa!
                  </MessageText>
                </MessageTextContainer>
              </MessageContainer>
              <HorizontalLine />
              <MessageContainer>
                <MessageAvatar src={avatar} alt="ava3" />
                <MessageTextContainer>
                  <MessageTitle>Leandro</MessageTitle>
                  <MessageText>> Para mim eh melhor de manha :(</MessageText>
                </MessageTextContainer>
              </MessageContainer>
            </MessagesContainer>
          </RightContainer>
        </InnerContainer>
      </Pagecontainer>
    );
  }

  return renderLogged();
}
