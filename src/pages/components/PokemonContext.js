import React, { createContext, useState } from 'react';

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {


    const pokemonlist = JSON.parse(localStorage.getItem('pokemon')) || {};

    const [myPokemon, setMyPokemon] = useState(pokemonlist);
    const [capturedPokemons, setCapturedPokemons] = useState([]);
    const providerValue = {
        myPokemon,
        setMyPokemon,
        capturedPokemons,
        setCapturedPokemons
    };

    return (
        <PokemonContext.Provider value={providerValue}>
            {children}
        </PokemonContext.Provider>
    )
}