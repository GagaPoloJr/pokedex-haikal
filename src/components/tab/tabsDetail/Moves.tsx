import React from 'react';
import { BadgeAbility } from '../../../style-components/tabs/index.style';

import DetailProps from './interface/DetailProps';
import Moves from '../../../models/Moves';

const TabsDetailMoves = ({ indexTab, pokemon }: DetailProps) => {
  return (
    <div className={indexTab === 2 ? 'block' : 'hidden'} id="link2">
      <div className="flex flex-wrap">
        {pokemon.moves.slice(0, 19).map(({ move }: Moves) => (
          <BadgeAbility
            key={move.name}
            className="mb-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full py-1 px-4 mr-2"
          >
            {move.name}
          </BadgeAbility>
        ))}
      </div>
    </div>
  );
};

export default TabsDetailMoves;
