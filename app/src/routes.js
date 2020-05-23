import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SejaUmProfessorPage from './pages/seja-um-professor';
import InscrevaSe from './pages/inscreva-se'
import Professor from './pages/inscreva-se/professor';
import Aluno from './pages/inscreva-se/aluno';
import Home from './Components/Home';

export default function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/sejaumprofessor" component={SejaUmProfessorPage}/>
        <Route path="/inscreva-se" component={InscrevaSe}/>
        <Route path="/inscreva-aluno" component={Aluno}/>
        <Route path="/inscreva-professor" component={Professor}/>
      </Switch>
    </BrowserRouter>
  );
}
