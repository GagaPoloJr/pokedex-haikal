import React, { useState } from 'react';

import TabList from './TabList';
import TabsComponent from './tabsDetail';

import Pokemon from '../../models/Pokemon';

interface TabDescriptionProps {
  pokemon: Pokemon;
}

const TabDetailDescription = ({ pokemon }: TabDescriptionProps) => {
  const [openTab, setOpenTab] = useState(3);

  return (
    <div className="flex flex-wrap">
      <div className="w-full">
        {/* Tab list */}
        <TabList indexTab={openTab} setOpenTab={setOpenTab} />
        {/* tab detail */}
        <TabsComponent openTab={openTab} pokemon={pokemon} />
      </div>
    </div>
  );
};

export default TabDetailDescription;
