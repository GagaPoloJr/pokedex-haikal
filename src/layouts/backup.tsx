import { useQuery } from '@apollo/client';
import React, { useEffect, useRef, useState } from 'react';
import { GET_POKEMONS } from '@/graphql/query';
import ListPokemonCards from '@/components/cards/ListPokemonCards';
import Pokemon from '@/models/Pokemon';
import Loader from '@/components/loader/MainLoader';
import { CardContainer } from '@/style-components/layouts/listPokemonLayout.style';

const ListPokemonLayout = () => {
  const [limit] = useState<number>(10);
  const [offset, setOffset] = useState<number>(0);
  const [initialData, setInitialData] = useState<Pokemon[]>([]);

  const containerRef = useRef<HTMLDivElement>(null);

  const { data, loading, error, fetchMore } = useQuery(GET_POKEMONS, {
    variables: { limit: limit, offset: offset },
  });

  const { pokemons } = data || {};

  useEffect(() => {
    if (pokemons?.results) {
      setInitialData((prevData) => {
        console.log(prevData);
        return [...prevData, ...pokemons.results];
      });
    }
  }, [pokemons?.results]);

  useEffect(() => {
    const loadMore = () => {
      if (pokemons?.next === null) return;
      fetchMore({
        variables: { offset: offset + limit },
        updateQuery: (prevResult: any, { fetchMoreResult }: any) => {
          if (!fetchMoreResult) return prevResult;
          return {
            pokemons: {
              ...fetchMoreResult.pokemons,
              results: [...prevResult.pokemons.results, ...fetchMoreResult.pokemons.results],
            },
          };
        },
      });
      setOffset((old) => old + limit);
    };

    const options = {
      root: null as Element | null,
      rootMargin: '20px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        loadMore();
      }
    }, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [containerRef, fetchMore, limit, offset, pokemons?.next]);

  if (loading && offset === 0) return <Loader />;
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <CardContainer>
        {initialData.map((pokemon: Pokemon, index: number) => (
          <ListPokemonCards id={pokemon.id} key={pokemon.id} name={pokemon.name} />
        ))}
        {pokemons?.results.map((pokemon: Pokemon, index: number) => {
          if (index === pokemons.results.length - 1) {
            return (
              <div ref={containerRef} key={pokemon.id}>
                <ListPokemonCards id={pokemon.id} key={pokemon.id} name={pokemon.name} />
              </div>
            );
          } else {
            return <ListPokemonCards id={pokemon.id} key={pokemon.id} name={pokemon.name} />;
          }
        })}
      </CardContainer>
    </>
  );
};

export default ListPokemonLayout;
