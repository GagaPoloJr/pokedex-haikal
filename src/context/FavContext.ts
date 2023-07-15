import { createContext } from 'react';

export namespace FavContexts {
  export interface ContextValue {
    pokemons: any[];
    loading: boolean;
    createFavPokemon: (pokemon: any) => void;
    deleteFavPokemon: (pokemonId: string) => void;
  }
}

export const FavContext = createContext<FavContexts.ContextValue | undefined>(undefined);
