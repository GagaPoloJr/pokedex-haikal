interface PokemonsResult {
  id: number;
  url: string;
  name: string;
  image: string;
  __typename: string;
}

interface Pokemons {
  count: number;
  next: string;
  previous: string;
  nextOffset: number;
  prevOffset: number;
  status: boolean;
  results: Array<PokemonsResult>;
}

export default Pokemons;
