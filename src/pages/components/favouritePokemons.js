import React, { useContext } from 'react';
import styled from "@emotion/styled";
import { Link } from 'react-router-dom';
import { PokemonContext } from './PokemonContext';

const Card = styled.div`
width: 100%;
position: relative;
background-color: #333C62;
border-radius: 11px;
padding: 20px;
`
const Button = styled.button`
background-color:#F7B916;
font-weight: 600
`

const Header = styled.div`
font-weight:700;
`

const FavouritePokemons = () => {
    const {
        myPokemon,
        setMyPokemon,
        capturedPokemons,
        setCapturedPokemons
    } = useContext(PokemonContext);



    return (
        <>
            <Card>
                <div className="flex justify-between">
                    <div className="text-center">
                        <Header className="text-lg">My Pokemon</Header>
                        <p>{myPokemon.length  === null || myPokemon.length  === undefined ? "0" : myPokemon.length}</p>
                    </div>
                    <div>
                        <Link to="/my-pokemon">
                            <Button className="w-full rounded-lg  py-3 px-10"><p className="text-center tracking-wider">View</p></Button>
                        </Link>
                    </div>
                </div>
            </Card>
        </>
    );
}

export default FavouritePokemons;