import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Main from './pages/main';
import DetailPokemon from './pages/detailPokemon';
import Welcome from './pages/Welcome';
import { PokemonProvider } from './pages/components/PokemonContext';
import MypokemonList from './pages/myPokemonList';
import { MobileContainer, Container } from './style-components/layouts';

const App = () => {
  return (
    <>
      <Container>
        <MobileContainer>
          <Switch>
            <PokemonProvider>
              <Route exact path="/my-pokemon">
                <MypokemonList />
              </Route>
              <Route exact path="/pokemon">
                <Main />
              </Route>
              <Route exact path="/detail-pokemon/:name">
                <DetailPokemon />
              </Route>
              <Route exact path="/">
                <Welcome />
              </Route>
            </PokemonProvider>
          </Switch>
        </MobileContainer>
      </Container>
    </>
  );
};

export default App;
