import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import InscrevaSe from './pages/cadastrar';
import Home from './pages/home';
import Pesquisa from './pages/pesquisa';
import Header from '../src/Components/Header';
import Footer from '../src/Components/Footer';

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
          <Route path="/cadastrar" component={InscrevaSe} />
          <Route path="/pesquisa" component={Pesquisa} />
        </Switch>
      </PageContainer>
      <Footer />
    </BrowserRouter>
  );
}
