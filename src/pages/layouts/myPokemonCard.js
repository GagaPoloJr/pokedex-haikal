import React from 'react';
import { Link } from 'react-router-dom';
import styled from "@emotion/styled";
import Pokeball from "../../img/pokeball.png";

const Card = styled.div`
width: 48%;
height: 200px;
margin-bottom: 3%;
margin-right: 2%;
position: relative;
background-color: #333C62;
border-radius: 11px;
padding: 20px 10px;
`

const Title = styled.div`
color: #F7B916;
font-weight: 700;
 text-transform: capitalize; 
`
const ImgPoke = styled.img`
max-width:70%;
`
const NickName = styled.div`
font-weight:600;
font-size:12px;
color: #c5c5c5;
`
const TextCatch = styled.div`
font-size:8px;
`

const MyPokemonCard = ({ pokemon, onRemove }) => {

  return (
    <>
      <Card>
        <div className="flex justify-between items-center">
          <div>
            <Link to={`detail-pokemon/${pokemon.name}`}>
              <Title className="">
                {pokemon.name}
              </Title>
            </Link>

          </div>
          <button onClick={() => onRemove(pokemon.unique)} > <img className="mx-auto w-1/3" src={Pokeball} alt="" />
            <TextCatch>
              Release
            </TextCatch>
          </button>
        </div>
        <Link to={`detail-pokemon/${pokemon.name}`}>

          <div className="flex flex-col justify-between items-center">
            <ImgPoke src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt={pokemon.name} />
            <NickName>
              {pokemon.nickname}
            </NickName>
          </div>
        </Link>
      </Card>
    </>
  );
}

export default MyPokemonCard;