import React from 'react';
import { useParams } from 'react-router-dom';
import DetailPokemonLayout from '../layouts/DetailPokemonLayout';

interface RouteParams {
  name: string;
}

const DetailPokemon = () => {
  let { name } = useParams<RouteParams>();

  return <DetailPokemonLayout params={name} />;
};

export default DetailPokemon;
