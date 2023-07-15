import Pokemon from '../models/Pokemon';
import { CREATE_FAV_POKEMON, DELETE_FAV_POKEMON } from './PokemonTypes';

interface PokemonState {
  pokemons: Pokemon[];
  loading: boolean;
}

interface Reducer {
  type: string;
  payload: any;
}
/**
 *  defining our state which needs to be changed later
 * @param state - to check current state
 * @param action - to do some action
 * @returns a state object with a new value
 */
const PokemonReducer = (state: PokemonState, action: Reducer): PokemonState => {
  switch (action.type) {
    case CREATE_FAV_POKEMON:
      return {
        ...state,
        pokemons: [action.payload, ...state.pokemons],
      };
    case DELETE_FAV_POKEMON:
      return {
        ...state,
        pokemons: state.pokemons.filter((pokemon: Pokemon) => pokemon.unique !== action.payload),
      };
    default:
      return state;
  }
};

export default PokemonReducer;
