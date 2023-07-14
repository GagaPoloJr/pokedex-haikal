import React from 'react';
import { Heading, Desc } from '../style-components/header';

const Hero = (props) => {
  return (
    <>
      <div className="flex flex-col my-10">
        <Heading className="text-3xl">{props.title}</Heading>
        <Desc className="text-sm font-light">{props.desc}</Desc>
      </div>
    </>
  );
};

export default Hero;
