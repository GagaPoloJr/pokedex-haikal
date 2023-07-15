import React from 'react';
import Hero from '../layouts/header';
import ListPokemonLayout from '../layouts/ListPokemonLayout';
import FavouritePokemons from '../components/Favourite';
import BackButton from '../components/buttons/Back';

const PokemonList = () => {
  const header = {
    title: 'Pokedex',
    desc: 'For each group of Pokémon presented to you, click one or more of your favorites from that group and press the "Catch" button.',
  };

  return (
    <>
      <div className="m-5">
        <BackButton />
        <Hero title={header.title} desc={header.desc} />
        <FavouritePokemons />
        <ListPokemonLayout />
      </div>
    </>
  );
};

export default PokemonList;
