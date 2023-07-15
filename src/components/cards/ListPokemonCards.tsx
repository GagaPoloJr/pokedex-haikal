import React from 'react';
import { Link } from 'react-router-dom';

// 165px card
import { Card, Title, ImgPoke } from '../../style-components/cards/pokemon.style';
import { SPRITE_IMG_URL } from '../../configs/config';

const ListPokemonCards = ({ pokemon }: any) => {
  return (
    <>
      <Card>
        <Link to={`detail-pokemon/${pokemon.name}`}>
          <div className="flex flex-col justify-center items-center">
            <Title className="mb-2">{pokemon.name}</Title>
            <ImgPoke src={SPRITE_IMG_URL(pokemon.id)} alt={pokemon.name} />
          </div>
        </Link>
      </Card>
    </>
  );
};

export default ListPokemonCards;
