import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';
import PokemonDetail from './layouts/pokemonDetail';


const client = new ApolloClient({
    uri: "https://graphql-pokeapi.vercel.app/api/graphql",
    cache: new InMemoryCache()

  });
  
const DetailPokemon = () => {
  let { name } = useParams();

  

    return ( 
        <>
        <ApolloProvider client={client}>
            <PokemonDetail params={name}/>
        </ApolloProvider>
        </>
     );
}
 
export default DetailPokemon;