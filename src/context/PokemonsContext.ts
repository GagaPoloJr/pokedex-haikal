import { createContext } from 'react';

interface PokemonContext {
  [key: string]: any;
}
export const PokemonsContext = createContext<PokemonContext>({});
