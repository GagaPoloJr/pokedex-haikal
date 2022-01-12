import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { GET_POKEMONS } from '../graphql/data';
import PokemonCard from '../layouts/pokemonCard';
import styled from "@emotion/styled";
import Loader from './loader';

const CardContainer = styled.div`
margin-top:75px;
display: flex;
flex-wrap: wrap;
justify-content: center;
`

const Pagination = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: center;
`;

const Arrow = styled.div`
  font-size:14px;
  padding: 0 20px;
`;

const ListPokemon = () => {
    const [limit] = useState(10);
    const [offset, setOffset] = useState(0);
    const [page, setPage] = useState(1);


    const { data, loading, error } = useQuery(GET_POKEMONS, {
        variables: { limit: limit, offset: offset },
    });

    const { pokemons: pokemon } = data || {};

    const { previous: prev } = pokemon || {};
    const { next } = pokemon || {};


    if (loading) return <Loader />;
    if (error) return `Error! ${error.message}`;

    let NextPage = (e) => {
        e.preventDefault();
        setOffset((old) => old + 10);
        setPage((old) => old + 1);
    };
    let PreviousPage = (e) => {
        e.preventDefault();
        setOffset((old) => old - 10);
        setPage((old) => old - 1);
    };

    return (
        <>
            <CardContainer>
                {pokemon.results.map((pokemon) =>
                (
                    <PokemonCard key={pokemon.name} pokemon={pokemon} />
                ))}
            </CardContainer>
            <Pagination>
                <Arrow>
                    {prev === null ? null : (
                        <i
                            onClick={PreviousPage}
                            disabled={prev == null}
                            className="cursor-pointer not-italic"
                        >prev</i>
                    )}
                </Arrow>
                <Arrow>
                    <h3>{page}</h3>
                </Arrow>
                <Arrow>
                    {next === null ? null : (
                        <i
                            onClick={NextPage}
                            disabled={next == null}
                            className="cursor-pointer not-italic"
                        >next</i>
                    )}
                </Arrow>
            </Pagination>
        </>
    );
}

export default ListPokemon;