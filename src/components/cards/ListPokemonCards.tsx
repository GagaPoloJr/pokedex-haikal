import React from 'react';
import { Link } from 'react-router-dom';

// 165px card
import { Card, Title, ImgPoke } from '../../style-components/cards/pokemon.style';
import { SPRITE_IMG_URL } from '../../configs/config';

interface ListPokemonCardsProps {
  name: string;
  id: number;
}

const ListPokemonCards = ({ name, id }: ListPokemonCardsProps) => {
  return (
    <>
      <Card>
        <Link to={`detail-pokemon/${name}`}>
          <div className="flex flex-col justify-center items-center">
            <Title className="mb-2">{name}</Title>
            <ImgPoke src={SPRITE_IMG_URL(id)} alt={name} />
          </div>
        </Link>
      </Card>
    </>
  );
};

export default ListPokemonCards;
