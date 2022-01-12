import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import swal from '@sweetalert/with-react';
import React, { useContext, useState } from 'react';

import MyPokemon from './components/myPokemon';
import { PokemonContext } from './components/PokemonContext';
import Hero from './layouts/header';

const client = new ApolloClient({
    uri: "https://graphql-pokeapi.vercel.app/api/graphql",
    cache: new InMemoryCache()
});


const MypokemonList = () => {

    const {
        myPokemon,
        setMyPokemon,
        capturedPokemons,
        setCapturedPokemons,
    } = useContext(PokemonContext);


    function handleRelease(unique) {

        var list = JSON.parse(localStorage.getItem('pokemon')) || [];
        list = list.filter((pokemon) => pokemon.unique !== unique);
        window.localStorage.setItem("pokemon", JSON.stringify(list));
        if (list.length === 0) {
            window.localStorage.removeItem("pokemon");
            // window.location.reload();

            swal({
                title: "Ummmm",
                text: `See ya Pokemon:( ! `,
                icon: "warning",
            }
            ).then(function () {
                // window.localStorage.removeItem("pokemon");
                window.location.reload();
            })
        }
        else {
            swal({
                title: "Ummmm",
                text: `See ya Pokemon:( ! `,
                icon: "warning",
            }
            ).then(function () {
                // window.localStorage.removeItem("pokemon");
                window.location.reload();
            })

        }
    }

    const titleHeader = "My Pokedex";
    const descHeader = 'For each group of Pokémon presented to you, press the "Release" button to let your pokemon go';
    return (
        <>
            <div className="m-5">
                <Hero title={titleHeader} desc={descHeader} />
                <ApolloProvider client={client}>
                    <MyPokemon list={myPokemon} onRemove={handleRelease} />
                </ApolloProvider>
            </div>
        </>
    );
}

export default MypokemonList;