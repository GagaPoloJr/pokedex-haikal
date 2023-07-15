import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import MyPokemonProps from '../models/MyPokemon';
import Pokemon from '../models/Pokemon';
import MyPokemonCards from '../components/cards/MyPokemonCards';
import { Pokeball } from '../helpers/images';
const CardContainer = styled.div`
  margin-top: 75px;
  display: flex;
  flex-wrap: wrap;
  justify-content: around;
  margin-bottom: 50px;
`;

const EmptyPokemon = () => {
  return (
    <>
      <div className="mt-5 flex flex-col justify-center items-center">
        <h3>No Pokemon</h3>
        <div className="mt-20">
          <Link to="/pokemon">
            <img className="mx-auto" src={Pokeball} alt="" />
            <p>Catch Some Pokemon</p>
          </Link>
        </div>
      </div>
      ;
    </>
  );
};

const MyPokemonLayout = ({ pokemon: pokemons, onRemove }: MyPokemonProps) => {
  if (pokemons.length === 0 && !pokemons) {
    return <EmptyPokemon />;
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        My Pokemon: {pokemons.length}
        <Link
          to="/pokemon"
          className="text-xs font-bold text-center  mt-5 px-5 py-3 shadow-lg rounded-full block leading-normal text-white bg-yellow-500 border-2 border-yellow-500 "
        >
          Catch another pokemon
        </Link>
      </div>
      <CardContainer>
        {pokemons.map((pokemon: Pokemon, index: number) => (
          <MyPokemonCards
            pokemon={pokemon}
            onRemove={onRemove}
            key={index}
            id={pokemon.id}
            name={pokemon.name}
            nickname={pokemon.nickname}
          />
        ))}
      </CardContainer>
    </>
  );
};

export default MyPokemonLayout;
