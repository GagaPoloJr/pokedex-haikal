import React, { useContext, useState } from 'react';
import styled from "@emotion/styled";
import MyPokemonCard from '../layouts/myPokemonCard';
import { Link } from 'react-router-dom';
import Pokeball from "../../img/pokeball.png"



const CardContainer = styled.div`
margin-top:75px;
display: flex;
flex-wrap: wrap;
justify-content: around;
margin-bottom: 50px;
`


const MyPokemon = ({ list, onRemove }) => {

    let i = 1;
    if (list.length === 0 || list.length === undefined) return <div className="mt-5 flex flex-col justify-center items-center"> <h3></h3> No Pokemon   <div className="mt-20">
        <Link to="/pokemon"> <img className="mx-auto" src={Pokeball} alt="" />
            <p>
                Catch Some Pokemon
            </p></Link>
    </div></div>;


    return (
        <>

            <div className="flex flex-col justify-center items-center">
                My Pokemon: {list.length}
                <Link to="/pokemon" className="text-xs font-bold text-center  mt-5 px-5 py-3 shadow-lg rounded-full block leading-normal text-white bg-yellow-500 border-2 border-yellow-500 ">
                    Catch another pokemon
                </Link>
            </div>
            <CardContainer>
                {list.map((pokemon) =>
                (
                    <MyPokemonCard pokemon={pokemon} onRemove={onRemove} key={i++} id={pokemon.id} name={pokemon.name} nickname={pokemon.nickname} />
                ))}
            </CardContainer>
        </>

    );
}

export default MyPokemon;