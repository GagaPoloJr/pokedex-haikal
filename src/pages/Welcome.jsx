import React from 'react';
import { Link } from 'react-router-dom';
import { Poke, Header, Button } from '@/style-components/pages/welcome.style';
import { PokeOrnament, WelcomeOrnament } from '@/helpers/images';

const Welcome = () => {
  return (
    <>
      <div className="flex h-screen justify-center items-center ">
        <Poke src={PokeOrnament} alt="" />
        <div className="text-center">
          <p className="text-lg text-sm tracking-wider">Welcome to</p>
          <Header className="text-4xl  tracking-wide">Pokedex</Header>
          <img className="mt-32 mb-20" src={WelcomeOrnament} alt="" />
          <Link to="/pokemon">
            <Button className=" w-full flex-auto content-center  rounded-lg  py-5">
              <p className="text-center tracking-wider">Find Pokemon</p>
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Welcome;
