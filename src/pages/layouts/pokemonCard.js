import { useQuery } from '@apollo/client';
import React from 'react';
import { Link } from 'react-router-dom';
import { GET_POKEMON_DETAIL } from '../graphql/dataDetail';
import styled from "@emotion/styled";
import CardLoader from '../components/cardLoader';

const Card = styled.div`
width: 48%;
height: 165px;
margin-bottom: 3%;
margin-right: 2%;
position: relative;
background-color: #333C62;
border-radius: 11px;
padding: 10px;
`

const Title = styled.div`
color: #F7B916;
font-weight: 700;
 text-transform: capitalize; 
`
const ImgPoke = styled.img`
max-width:70%;
`


const PokemonCard = ({ pokemon }) => {
  const { data, loading, error } = useQuery(GET_POKEMON_DETAIL, {
    variables: { name: pokemon.name }
  });

  if (loading) return <CardLoader/>;
  if (error) return `Error! ${error.message}`;

  const { pokemon: detail } = data || {};

 

  return (
    <>
      <Card>
        <Link to={`detail-pokemon/${detail.name}`}>
          <div className="flex flex-col justify-center items-center">
            <Title className="mb-2">
              {detail.name}
            </Title>
            <ImgPoke src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${detail.id}.png`} alt={detail.name} />
          </div>
        </Link>
      </Card>
    </>
  );
}

export default PokemonCard;