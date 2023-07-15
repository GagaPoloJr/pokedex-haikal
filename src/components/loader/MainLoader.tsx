import React from 'react';
import { Pokeball } from '../../helpers/images';
const Loader = () => {
  return (
    <>
      <div className="preload">
        <img className="pokeload bounce-7" src={Pokeball} alt="" />
      </div>
    </>
  );
};

export default Loader;
