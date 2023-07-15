import React from 'react';
import Hero from '../layouts/header';
import ListPokemonLayout from '../layouts/ListPokemonLayout';
import FavouritePokemons from '../components/Favourite';

const PokemonList = () => {
  const titleHeader = 'Pokedex';
  const descHeader =
    'For each group of Pokémon presented to you, click one or more of your favorites from that group and press the "Catch" button.';
  return (
    <>
      <div className="m-5">
        <Hero title={titleHeader} desc={descHeader} />
        <FavouritePokemons />
        <ListPokemonLayout />
      </div>
    </>
  );
};

export default PokemonList;
