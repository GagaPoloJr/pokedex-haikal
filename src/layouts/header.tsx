import React from 'react';
import { Heading, Desc } from '@/style-components/header/index.style';

interface HeroProps {
  title: string;
  desc: string;
}
const Hero = ({ title, desc }: HeroProps) => {
  return (
    <>
      <div className="flex flex-col my-10">
        <Heading className="text-3xl">{title}</Heading>
        <Desc className="text-sm font-light">{desc}</Desc>
      </div>
    </>
  );
};

export default Hero;
