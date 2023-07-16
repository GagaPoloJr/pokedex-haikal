import swal from '@sweetalert/with-react';
import React, { useContext } from 'react';
import Hero from '@/layouts/header';
import MyPokemonLayout from '@/layouts/MyPokemonLayout';
import { FavContext } from '@/context/FavContext';
import BackButton from '@/components/buttons/Back';

const MypokemonList = () => {
  const { pokemons: myPokemon, deleteFavPokemon } = useContext(FavContext);

  const handleRelease = (unique: string) => {
    deleteFavPokemon(unique);
    swal({
      title: 'Ummmm',
      text: `See ya Pokemon:( ! `,
      icon: 'warning',
    });
  };

  const header = {
    title: 'My Pokedex',
    desc: 'For each group of Pokémon presented to you, press the "Release" button to let your pokemon go',
  };

  return (
    <>
      <div className="m-5">
        <BackButton />
        <Hero title={header.title} desc={header.desc} />
        <MyPokemonLayout pokemon={myPokemon} onRemove={handleRelease} />
      </div>
    </>
  );
};

export default MypokemonList;
