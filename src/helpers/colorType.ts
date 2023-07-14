type ColorType = {
  background: string;
  variant: string;
};

/**
 * Function to get the color type of the pokemon
 * @param {String} color - color based on type pokemon
 * @param {String} type - color type for background color or variant color
 * @returns {String} - the color value based on the specified color and type
 */
export const PokemonColorType = (color: string, type: 'background' | 'variant'): string => {
  const colorMap: { [key: string]: ColorType } = {
    bug: { background: '#A6B91A', variant: '#94BC4A' },
    dark: { background: '#705746', variant: '#736C75' },
    dragon: { background: '#6F35FC', variant: '#6A7BAF' },
    electric: { background: '#F7D02C', variant: '#E5C531' },
    fairy: { background: '#D685AD', variant: '#E397D1' },
    fighting: { background: '#CB5F48', variant: '#CB5F48' },
    fire: { background: '#FE9273', variant: '#EA7A3C' },
    flying: { background: '#A98FF3', variant: '#7DA6DE' },
    ghost: { background: '#735797', variant: '#846AB6' },
    grass: { background: '#7AC74C', variant: '#51bb32' },
    ground: { background: '#E2BF65', variant: '#CC9F4F' },
    ice: { background: '#96D9D6', variant: '#70CBD4' },
    normal: { background: '#A8A77A', variant: '#AAB09F' },
    poison: { background: '#A33EA1', variant: '#B468B7' },
    psychic: { background: '#F95587', variant: '#E5709B' },
    rock: { background: '#B6A136', variant: '#B2A061' },
    steel: { background: '#B7B7CE', variant: '#89A1B0' },
    water: { background: '#6390F0', variant: '#539AE2' },
  };

  const defaultColor: ColorType = { background: 'grey', variant: 'grey' };

  return colorMap[color] ? colorMap[color][type] : defaultColor[type];
};
