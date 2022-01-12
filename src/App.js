import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Main from "./pages/main";
import DetailPokemon from "./pages/detailPokemon";
import Welcome from "./pages/welcome";
import styled from "@emotion/styled";
import { PokemonProvider } from "./pages/components/PokemonContext";
import MypokemonList from "./pages/myPokemonList";


const MobileContainer = styled.div`
width: 414px;
min-height:100vh;
height:100%;
border: 1px solid #ccc;
background: #2C3353;
position: relative;
`;

const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
}
`


const App = () => {
  return (
    <>
      <Container>
        <MobileContainer >
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
