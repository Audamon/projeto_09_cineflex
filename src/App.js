import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import TopBar from './TopBar';
import MoviesList from './MoviesList/MoviesList';
import Sessions from './Sessions/Sessions';
import Seats from './Seats/Seats';
import Success from './Success/Success';

export default function App() {
  const [order, setOrder] = useState({
    title: '',
    date: '',
    hour: '',
    seats: [],
    buyerName: '',
    cpf: '',
  });

  const [backButton, setBackButton] = useState('');
  return (
    <BrowserRouter>
      <TopBar backButton={backButton} />
      <Switch>
        <Route path="/" exact={true}>
          <MoviesList setBackButton={setBackButton} />
        </Route>
        <Route path="/sessoes/:idFilme" exact={true}>
          <Sessions
            order={order}
            setOrder={setOrder}
            setBackButton={setBackButton}
          />
        </Route>
        <Route path="/assentos/:idSessao" exact={true}>
          <Seats
            order={order}
            setOrder={setOrder}
            setBackButton={setBackButton}
          />
        </Route>
        <Route path="/sucesso" exact={true}>
          <Success order={order} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
