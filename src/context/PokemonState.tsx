import React, { useEffect, useReducer } from 'react';
import PokemonReducer from './PokemonReducer';
import { CREATE_FAV_POKEMON, DELETE_FAV_POKEMON, LOAD_FAV_POKEMONS } from './PokemonTypes';
import { FavContext } from './FavContext';
import Pokemon from '../models/Pokemon';

/**
 *
 * @param param0 - register the context to the children
 * @returns
 */
export const PokemonState = ({ children }: any) => {
  const storedPokemons = localStorage.getItem('favPokemons');
  // define states default
  const initialState = {
    pokemons: storedPokemons ? JSON.parse(storedPokemons) : [],
    loading: true,
  };

  //   dispatching reducer
  const [state, dispatch] = useReducer(PokemonReducer, initialState);

  //  add fav pokemons
  const createFavPokemon = (pokemon: Pokemon) => {
    dispatch({ type: CREATE_FAV_POKEMON, payload: pokemon });
  };

  const deleteFavPokemon = (uniqueId: string) => {
    dispatch({ type: DELETE_FAV_POKEMON, payload: uniqueId });
  };

  const { pokemons, loading } = state;

  // load pokemons from localStorage
  const loadFavPokemons = () => {
    if (storedPokemons) dispatch({ type: LOAD_FAV_POKEMONS, payload: JSON.parse(storedPokemons) });
  };

  useEffect(() => {
    loadFavPokemons();
  });

  // store fav pokemons
  useEffect(() => {
    localStorage.setItem('favPokemons', JSON.stringify(pokemons));
  }, [pokemons]);

  const contextValue = {
    pokemons,
    loading,
    createFavPokemon,
    deleteFavPokemon,
  };

  return <FavContext.Provider value={contextValue}>{children}</FavContext.Provider>;
};
