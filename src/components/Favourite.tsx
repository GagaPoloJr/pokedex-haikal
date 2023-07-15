import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavContext } from '../context/FavContext';
import { Button, Card, Header } from '../style-components/favourite.style';

const FavouritePokemons = () => {
  const { pokemons: myPokemon } = useContext(FavContext);

  const totalPokemons = () => {
    return myPokemon.length === null || myPokemon.length === undefined ? '0' : myPokemon.length;
  };
  return (
    <>
      <Card>
        <div className="flex justify-between">
          <div className="text-center">
            <Header className="text-lg">My Pokemon</Header>
            <p>{totalPokemons()}</p>
          </div>
          <div>
            <Link to="/my-pokemon">
              <Button className="w-full rounded-lg  py-3 px-10">
                <p className="text-center tracking-wider">View</p>
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </>
  );
};

export default FavouritePokemons;
