import React from 'react';

import DetailProps from './interface/DetailProps';
import {
  ColorFont,
  HeadingAbout,
  HeadingDesc,
  SubHeading,
} from '@/style-components/tabs/index.style';
import HeldItems from '@/models/HeldItems';

const TabsDetailAbout = ({ indexTab, pokemon }: DetailProps) => {
  const renderHeldItems = () => {
    if (pokemon.held_items.length === 0) {
      return <HeadingDesc className="ml-2">No held items</HeadingDesc>;
    }
    return pokemon.held_items.map(({ item }: HeldItems) => (
      <div
        className="mb-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full py-2 px-5 text-sm mr-3"
        key={item.name}
      >
        {item.name}
      </div>
    ));
  };

  return (
    <div className={indexTab === 4 ? 'block' : 'hidden'} id="link3">
      <HeadingAbout>{pokemon.name}</HeadingAbout>
      <HeadingDesc>
        This is a pokemon named {pokemon.name}. you can catch it by pressing the catch pokemon
        button with a 50% success rate and 50% fail rate.
      </HeadingDesc>
      <div className="my-4 flex justify-around items-center">
        <div>
          <SubHeading>height</SubHeading>
          <ColorFont>{pokemon.height}"</ColorFont>
        </div>
        <div>
          <SubHeading>Weight</SubHeading>
          <ColorFont>{pokemon.weight} lbs</ColorFont>
        </div>
      </div>
      <HeadingAbout>Held Items</HeadingAbout>
      <div className="mt-3 flex flex-wrap">{renderHeldItems()}</div>
    </div>
  );
};

export default TabsDetailAbout;
