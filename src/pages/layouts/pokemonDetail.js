import React, { createContext, useContext, useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_POKEMON_DETAIL } from '../graphql/dataDetail';
import styled from '@emotion/styled';
import Pokeball from '../../img/pokeball.png';
import FavouritePokemons from '../components/favouritePokemons';
import tabDescription from '../components/tabDescription';
import Loader from '../components/loader';
import { PokemonContext } from '../components/PokemonContext';
import swal from '@sweetalert/with-react';
import uuid from 'react-native-uuid';
import TabDetail from '../../components/tab';

const handleColorType = (color) => {
  switch (color) {
    case 'bug':
      return '#A6B91A';
    case 'dark':
      return '#705746';
    case 'dragon':
      return '#6F35FC';
    case 'electric':
      return '#F7D02C';
    case 'fairy':
      return '#D685AD';
    case 'fighting':
      return '#CB5F48';
    case 'fire':
      return '#FE9273';
    case 'flying':
      return '#A98FF3';
    case 'ghost':
      return '#735797';
    case 'grass':
      return '#7AC74C';
    case 'ground':
      return '#E2BF65';
    case 'ice':
      return '#96D9D6';
    case 'normal':
      return '#A8A77A';
    case 'poison':
      return '#A33EA1';
    case 'psychic':
      return '#F95587';
    case 'rock':
      return '#B6A136';
    case 'steel':
      return '#B7B7CE';
    case 'water':
      return '#6390F0';
    default:
      return 'grey';
  }
};

const TypeColor = (colors) => {
  switch (colors) {
    case 'bug':
      return '#94BC4A';
    case 'dark':
      return '#736C75';
    case 'dragon':
      return '#6A7BAF';
    case 'electric':
      return '#E5C531';
    case 'fairy':
      return '#E397D1';
    case 'fighting':
      return '#CB5F48';
    case 'fire':
      return '#EA7A3C';
    case 'flying':
      return '#7DA6DE';
    case 'ghost':
      return '#846AB6';
    case 'grass':
      return '#51bb32';
    case 'ground':
      return '#CC9F4F';
    case 'ice':
      return '#70CBD4';
    case 'normal':
      return '#AAB09F';
    case 'poison':
      return '#B468B7';
    case 'psychic':
      return '#E5709B';
    case 'rock':
      return '#B2A061';
    case 'steel':
      return '#89A1B0';
    case 'water':
      return '#539AE2';
    default:
      return 'grey';
  }
};

const BgColor = styled.div`
  background-color: ${({ color }) => handleColorType(color)};
  width: 100%;
  min-height: 120vh;
  max-height: 100%;
  position: relative;
`;
const Title = styled.div`
  font-weight: 700;
  font-size: 24px;
  text-transform: capitalize;
`;
const SubTitle = styled.div`
  font-weight: 700;
  font-size: 14px;
  color: #333c62;
`;

const TypeBg = styled.div`
  font-size: 12px;
  text-align: center;
  width: 70px;
  padding: 5px;
  border-radius: 20px;
  background-color: ${({ colors }) => TypeColor(colors)};
  color: white;
  margin-right: 5px;
  z-index: 2;
`;
const ImgPoke = styled.img`
  max-width: 70%;
`;
const TextCatch = styled.div`
  font-size: 12px;
`;
const Description = styled.div`
  margin-top: 50px;
  width: 100%;
  height: 80vh;
  padding: 20px;
  background: #2c3353;
  border-radius: 22px 22px 0px 0px;
  z-index: 3;
`;

const PokemonDetail = ({ params }) => {
  const { data, loading, error } = useQuery(GET_POKEMON_DETAIL, {
    variables: { name: params },
  });

  // get and store my pokemon list
  const { myPokemon, setMyPokemon, capturedPokemons, setCapturedPokemons } =
    useContext(PokemonContext);

  const { pokemon } = data || {};

  const [rateChance, setRateChance] = useState(Math.random() < 0.5);

  const capture = () => () => {
    setRateChance(Math.random() < 0.5);
    if (rateChance === true) {
      let nickname = '';
      swal(`A wild ${pokemon.name} appeared! What do you want to do?`, {
        buttons: {
          cancel: 'Run away!',
          catch: {
            text: 'Throw Pokéball!',
            value: 'catch',
          },
        },
      }).then((value) => {
        switch (value) {
          case 'catch':
            swal('Give ur pokemon nickname:', {
              content: 'input',
            }).then((value) => {
              if (value === null || value === '' || value === '') {
                nickname = pokemon.name;
              } else {
                nickname = value;
              }

              const dataPokemon = {
                unique: uuid.v4(),
                id: pokemon.id,
                name: pokemon.name,
                nickname: nickname,
              };
              // setCapturedPokemons([...capturedPokemons, dataPokemon]);
              var list = JSON.parse(localStorage.getItem('pokemon')) || [];
              list.push(dataPokemon);
              localStorage.setItem('pokemon', JSON.stringify(list));
              setMyPokemon(JSON.parse(localStorage.getItem('pokemon')));
              swal({
                title: 'Gotcha!',
                text: `${pokemon.name} was caught!`,
                icon: 'success',
              }).then(function () {
                window.location.reload();
              });
            });
            break;
          default:
            swal('Got away safely!');
        }
      });
    } else {
      swal({
        title: 'Oh NO!!',
        text: `${pokemon.name} ran away!`,
        icon: 'warning',
        button: 'Ok....',
      });
    }
  };

  if (loading) return <Loader />;
  if (error) return `Error! ${error.message}`;
  return (
    <>
      {pokemon.types.slice(0, 1).map((x) => (
        <BgColor key={x.type.name} color={x.type.name}>
          <div className="p-10">
            <div className="flex justify-between items-center">
              <div>
                <Title>{pokemon.name}</Title>
                <SubTitle>#{pokemon.id}</SubTitle>
              </div>
              <div>
                <button onClick={capture(pokemon)}>
                  {' '}
                  <img className="mx-auto" src={Pokeball} alt="" />
                  <TextCatch>Catch Pokemon</TextCatch>
                </button>
              </div>
            </div>
            <div className="flex mt-10">
              {pokemon.types.map((type) => (
                <TypeBg key={type.type.name} colors={type.type.name}>
                  {type.type.name}
                </TypeBg>
              ))}
            </div>
            <div></div>
            <div>{pokemon.status}</div>
            <ImgPoke
              className="mx-auto"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
              alt={pokemon.name}
            />
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

export default PokemonDetail;
