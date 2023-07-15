import { useQuery } from '@apollo/client';
import React, { useContext, useState } from 'react';
import { GET_POKEMONS } from '../graphql/query';
import ListPokemonCards from '../components/cards/ListPokemonCards';
import Pokemon from '../models/Pokemon';
import Loader from '../components/loader/MainLoader';
import {
  CardContainer,
  Pagination,
  Arrow,
} from '../style-components/layouts/listPokemonLayout.style';

const ListPokemonLayout = () => {
  const [limit] = useState<number>(10);
  const [offset, setOffset] = useState<number>(0);
  const [page, setPage] = useState<number>(1);

  const { data, loading, error } = useQuery(GET_POKEMONS, {
    variables: { limit: limit, offset: offset },
  });

  const { pokemons: pokemon } = data || {};

  const { previous: prev } = pokemon || {};
  const { next } = pokemon || {};

  if (loading) return <Loader />;
  if (error) return `Error! ${error.message}`;

  let NextPage = (e: any) => {
    e.preventDefault();
    setOffset((old) => old + 10);
    setPage((old) => old + 1);
  };
  let PreviousPage = (e: any) => {
    e.preventDefault();
    setOffset((old) => old - 10);
    setPage((old) => old - 1);
  };

  return (
    <>
      <CardContainer>
        {pokemon.results.map((pokemon: Pokemon) => (
          <ListPokemonCards key={pokemon.name} pokemon={pokemon} />
        ))}
      </CardContainer>
      <Pagination>
        <Arrow>
          {prev === null ? null : (
            <button
              onClick={PreviousPage}
              disabled={prev === null}
              className="cursor-pointer not-italic"
            >
              prev
            </button>
          )}
        </Arrow>
        <Arrow>
          <h3>{page}</h3>
        </Arrow>
        <Arrow>
          {next === null ? null : (
            <button
              onClick={NextPage}
              disabled={next === null}
              className="cursor-pointer not-italic"
            >
              next
            </button>
          )}
        </Arrow>
      </Pagination>
    </>
  );
};

export default ListPokemonLayout;
