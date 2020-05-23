import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import InscrevaSe from './pages/cadastrar';
import Home from './pages/home';
import Pesquisa from './pages/pesquisa';
import Entrar from './pages/entrar';
import Header from '../src/Components/Header';
import Footer from '../src/Components/Footer';

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/entrar" component={Entrar} />
        <Route path="/cadastrar" component={InscrevaSe} />
        <Route path="/pesquisa" component={Pesquisa} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
