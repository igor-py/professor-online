import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SejaUmProfessorPage from './pages/seja-um-professor';
import InscrevaSe from './pages/inscreva-se'
import Home from './Components/Home';
import Pesquisa from './pages/pesquisa'

export default function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/sejaumprofessor" component={SejaUmProfessorPage}/>
        <Route path="/inscreva-se" component={InscrevaSe}/>
        <Route path="/pesquisa" component={Pesquisa}/>
      </Switch>
    </BrowserRouter>
  );
}
