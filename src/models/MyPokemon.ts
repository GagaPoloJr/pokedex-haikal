interface MyPokemonProps {
  id?: number;
  name?: string;
  nickname?: string;
  [key: string]: any;
  onRemove: (unique: string) => void;
}

export default MyPokemonProps;
