import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Welcome from './pages/Welcome';
import MypokemonList from './pages/MyPokemonList';
import { MobileContainer, Container } from './style-components/layouts/index.style';
import PokemonList from './pages/PokemonList';
import DetailPokemon from './pages/DetailPokemon';
import { PokemonState } from './context/PokemonState';

const App = () => {
  return (
    <>
      <Container>
        <MobileContainer>
          <Switch>
            <PokemonState>
              <Route exact path="/my-pokemon">
                <MypokemonList />
              </Route>
              <Route exact path="/pokemon">
                <PokemonList />
              </Route>
              <Route exact path="/detail-pokemon/:name">
                <DetailPokemon />
              </Route>
              <Route exact path="/">
                <Welcome />
              </Route>
            </PokemonState>
          </Switch>
        </MobileContainer>
      </Container>
    </>
  );
};

export default App;
