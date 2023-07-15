import Abilities from './Abilities';
import HeldItems from './HeldItems';
import Moves from './Moves';
import Stats from './Stats';

interface Pokemon {
  id: number;
  name: string;
  base_experience?: number;
  stats?: Stats[];
  moves?: Moves[];
  abilities?: Abilities[];
  height?: number;
  weight?: number;
  held_items?: HeldItems[];
  nickname?: string;
  [key: string]: any;
}

export default Pokemon;
