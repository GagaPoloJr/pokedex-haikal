import React from 'react';
import Abilities from '../../../models/Abilities';
import DetailProps from './interface/DetailProps';

const TabsDetailAbilities = ({ indexTab, pokemon }: DetailProps) => {
  return (
    <div className={indexTab === 1 ? 'block' : 'hidden'} id="link3">
      <div className="flex flex-wrap">
        {pokemon.abilities.map(({ ability }: Abilities, index: number) => (
          <div
            key={index}
            className="mb-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full py-2 px-5 text-sm mr-3"
          >
            {ability.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabsDetailAbilities;
