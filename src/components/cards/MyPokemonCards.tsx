import React from 'react';
import { Link } from 'react-router-dom';
import Pokeball from '../../img/pokeball.png';
import {
  Card,
  Title,
  TextCatch,
  ImgPoke,
  NickName,
} from '../../style-components/cards/pokemon.style';

import { SPRITE_IMG_URL } from '../../configs/config';
import MyPokemonProps from '../../models/MyPokemon';

const MyPokemonCards = ({ pokemon, onRemove }: MyPokemonProps) => {
  const handleClick = () => {
    onRemove(pokemon.unique);
  };
  return (
    <>
      <Card>
        <div className="flex justify-between items-center">
          <div>
            <Link to={`detail-pokemon/${pokemon.name}`}>
              <Title className="">{pokemon.name}</Title>
            </Link>
          </div>
          <button onClick={handleClick}>
            <img className="mx-auto w-1/3" src={Pokeball} alt="" />
            <TextCatch>Release</TextCatch>
          </button>
        </div>
        <Link to={`detail-pokemon/${pokemon.name}`}>
          <div className="flex flex-col justify-between items-center">
            <ImgPoke src={SPRITE_IMG_URL(pokemon.id)} alt={pokemon.name} />
            <NickName>{pokemon.nickname}</NickName>
          </div>
        </Link>
      </Card>
    </>
  );
};

export default MyPokemonCards;
