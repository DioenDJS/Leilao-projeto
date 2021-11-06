import React from 'react';
import Titulo from './components/Titulo';
import ListaObras from './components/ListaObras';
import Detalhes from './components/Detalhes';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <Router>
        <Titulo />
      <Switch>
        <Route path="/" exact>
           <ListaObras />
        </Route>
        <Route path="/detalhes/:id">
          <Detalhes/>
        </Route> 
      </Switch>
    </Router>
  );

  
};

export default App;
