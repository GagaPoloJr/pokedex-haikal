import Pokemon from './Pokemon';

interface MyPokemonProps {
  pokemon: Pokemon;
  onRemove: (unique: string) => void;
}

export default MyPokemonProps;
