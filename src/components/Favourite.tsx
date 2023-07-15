import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavContext } from '../context/FavContext';
import { Button, Card, Header } from '../style-components/favourite.style';

const FavouritePokemons = () => {
  const { pokemons: myPokemon } = useContext(FavContext);
  return (
    <>
      <Card>
        <div className="flex justify-between">
          <div className="text-center">
            <Header className="text-lg">My Pokemon</Header>
            <p>
              {myPokemon.length === null || myPokemon.length === undefined ? '0' : myPokemon.length}
            </p>
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
