import React from 'react';
import TabsDetailStats from './Stats';
import TabsDetailMoves from './Moves';
import TabsDetailAbilities from './Abilities';
import TabsDetailAbout from './About';
import Pokemon from '../../../models/Pokemon';

interface TabsComponentProps {
  openTab: number;
  pokemon: Pokemon;
}

const TabsComponent = ({ openTab, pokemon }: TabsComponentProps) => {
  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6">
      <div className="px-4 py-5 flex-auto">
        <div className="tab-content tab-space">
          {/* Detail components */}
          {openTab === 3 && <TabsDetailStats key="stas" indexTab={openTab} pokemon={pokemon} />}
          {openTab === 2 && <TabsDetailMoves key="moves" indexTab={openTab} pokemon={pokemon} />}
          {openTab === 1 && (
            <TabsDetailAbilities key="abilities" indexTab={openTab} pokemon={pokemon} />
          )}
          {openTab === 4 && <TabsDetailAbout key="about" indexTab={openTab} pokemon={pokemon} />}
        </div>
      </div>
    </div>
  );
};

export default TabsComponent;
