import React from 'react';
import loadingGif from '../../img/pokemon.gif';

const CardLoader = () => {
  return (
    <>
      <img className="cardloader" src={loadingGif} alt="" />
    </>
  );
};

export default CardLoader;
