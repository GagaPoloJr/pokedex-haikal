export const GRAPHQL_URL = process.env.REACT_APP_GRAPHQL_URL || '';

export const SPRITE_IMG_URL = (pokemonId: number): string => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;
};
