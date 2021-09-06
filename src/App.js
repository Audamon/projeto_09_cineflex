import TopBar from "./TopBar";
import MoviesList from "./MoviesList";
import Sessions from "./Sessions";
import Seats from "./Seats";
import Success from "./Success";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";

export default function App() {

  const [order, setOrder] = useState({title:'',
                                      date: '',
                                      hour: '',
                                      seats:[],
                                      buyerName: '',
                                      cpf: ''});
  return (
    <BrowserRouter>
      <TopBar />
      <Switch>
        <Route path="/" exact={true}>
          <MoviesList />
        </Route>
        <Route path="/sessoes/:idFilme" exact={true}>
          <Sessions order={order} setOrder={setOrder}/>
        </Route>
        <Route path="/assentos/:idSessao" exact={true}>
          <Seats order={order} setOrder={setOrder}/>
        </Route>
        <Route path="/sucesso" exact={true}>
          <Success order={order}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

