import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';
import ListPokemon from './components/listPokemon';
import FavouritePokemons from './components/favouritePokemons';
import Hero from '../layouts/header';

const client = new ApolloClient({
  uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
  cache: new InMemoryCache(),
});

const Main = () => {
  const titleHeader = 'Pokedex';
  const descHeader =
    'For each group of Pokémon presented to you, click one or more of your favorites from that group and press the "Catch" button.';
  return (
    <>
      <div className="m-5">
        <Hero title={titleHeader} desc={descHeader} />
        <FavouritePokemons className="mb-5" />
        <ApolloProvider client={client}>
          <ListPokemon />
        </ApolloProvider>
      </div>
    </>
  );
};

export default Main;
