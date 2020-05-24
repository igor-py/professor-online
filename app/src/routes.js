import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Cadastrar from './pages/cadastrar';
import Home from './pages/home';
import Pesquisa from './pages/pesquisa';
import Header from '../src/Components/Header';
import Footer from '../src/Components/Footer';
import Perfil from './pages/perfil';

const PageContainer = styled.div`
  min-height: 80vh;
`;

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <PageContainer>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cadastrar" component={Cadastrar} />
          <Route path="/pesquisa" component={Pesquisa} />
          <Route path="/perfil" component={Perfil}/>
        </Switch>
      </PageContainer>
      <Footer />
    </BrowserRouter>
  );
}
