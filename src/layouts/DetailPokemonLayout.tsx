import React, { useContext, useState } from 'react';
import { useQuery } from '@apollo/client';
import swal from '@sweetalert/with-react';
import { PokemonColorType } from '@/helpers/colorType';

import { Pokeball } from '@/helpers/images';
import {
  BgColor,
  Title,
  SubTitle,
  TextCatch,
  TypeBg,
  ImgPoke,
  Description,
} from '@/style-components/pages/detailPokemon.style';
import Loader from '@/components/loader/MainLoader';
import TabDetail from '@/components/tab';
import FavouritePokemons from '@/components/Favourite';

import { GET_POKEMON_DETAIL } from '@/graphql/query';
import { FavContext } from '@/context/FavContext';
import { SPRITE_IMG_URL } from '@/configs/config';
import { capturePokemon } from '@/helpers/capturePokemon';
import Pokemon from '@/models/Pokemon';
import BackButton from '@/components/buttons/Back';

const DetailPokemonLayout = ({ params }: any) => {
  const { data, loading, error } = useQuery(GET_POKEMON_DETAIL, {
    variables: { name: params },
  });

  const { createFavPokemon } = useContext(FavContext);
  // get and store my pokemon list
  const { pokemon } = data || {};

  const [rateChance, setRateChance] = useState(Math.random() < 0.5);

  // capture pokemon
  const handleCapture = () => {
    capturePokemon({ pokemon, setRateChance, rateChance, swal, createFavPokemon });
  };

  if (loading) return <Loader />;
  if (error) return `Error! ${error.message}`;
  return (
    <>
      {pokemon.types.slice(0, 1).map((item: Pokemon) => (
        <BgColor
          key={item.type.name}
          color={item.type.name}
          handleColorType={() => PokemonColorType(item.type.name, 'background')}
        >
          <div className="p-10">
            <BackButton />

            <div className="flex justify-between items-center">
              <div>
                <Title>{pokemon.name}</Title>
                <SubTitle>#{pokemon.id}</SubTitle>
              </div>
              <div>
                <button onClick={() => handleCapture()}>
                  <img className="mx-auto" src={Pokeball} alt="" />
                  <TextCatch>Catch Pokemon</TextCatch>
                </button>
              </div>
            </div>
            <div className="flex mt-10">
              {pokemon.types.map((type: any) => (
                <TypeBg
                  key={type.type.name}
                  color={item.type.name}
                  handleColorType={() => PokemonColorType(item.type.name, 'variant')}
                >
                  {type.type.name}
                </TypeBg>
              ))}
            </div>
            <div></div>
            <div>{pokemon.status}</div>
            <ImgPoke className="mx-auto" src={SPRITE_IMG_URL(pokemon.id)} alt={pokemon.name} />
          </div>
          <div className="px-5">
            <FavouritePokemons />
          </div>
          <Description>
            <TabDetail pokemon={pokemon} />
          </Description>
        </BgColor>
      ))}
    </>
  );
};

export default DetailPokemonLayout;
