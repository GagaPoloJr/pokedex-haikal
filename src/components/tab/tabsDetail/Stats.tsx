import React from 'react';

import Stats from '../../../models/Stats';
import DetailProps from './interface/DetailProps';

const baseStateColor = (baseStat: number, type: string) => {
  switch (type) {
    case 'text':
      return baseStat < 50 ? 'text-yellow-600' : baseStat > 89 ? 'text-red-500' : 'text-green-500';
    case 'background':
      return baseStat < 50 ? 'bg-yellow-500' : baseStat > 89 ? 'bg-red-500' : 'bg-green-500';
  }
};
const TabsDetailStats = ({ indexTab, pokemon }: DetailProps) => {
  return (
    <div className={indexTab === 3 ? 'block' : 'hidden'} id="link1">
      <p className="text-center font-bold">
        Base Experience: <span className="text-yellow-500">{pokemon.base_experience}</span>
      </p>
      {pokemon.stats.map(({ stat, base_stat }: Stats, index: number) => (
        <div key={index} className="flex flex-col">
          <p className="text-sm text-slate-300" key={stat.name}>
            {stat.name}
            <span className={baseStateColor(base_stat, 'text')}>({base_stat})</span>
          </p>
          <div className="w-full bg-gray-200 rounded-full h-1 mb-6">
            <div
              className={`${baseStateColor(base_stat, 'background')} h-1`}
              style={{ width: `${base_stat / 1.7}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TabsDetailStats;
