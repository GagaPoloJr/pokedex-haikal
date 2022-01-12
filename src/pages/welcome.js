import React from 'react';
import styled from "@emotion/styled";
import poke from "../img/poke.png";
import welcome from "../img/welcome.png";
import { Link } from 'react-router-dom';


const Header = styled.div`
color:#F4C537;
font-weight: 900
`;

const Poke = styled.img`
position: absolute;
top:0;
left:0;
z-index:1;
`;

const Button = styled.button`
background-color:#F7B916;
font-weight: 600
`


const Welcome = () => {
    return (
        <>
            <div className="flex h-screen justify-center items-center ">
                <Poke src={poke} alt="" />
                <div className="text-center">
                    <p className="text-lg text-sm tracking-wider">
                        Welcome to
                    </p>
                    <Header className="text-4xl  tracking-wide">
                        Pokedex
                    </Header>
                    <img className="mt-32 mb-20" src={welcome} alt="" />
                    <Link to="/pokemon">
                    <Button className=" w-full flex-auto content-center  rounded-lg  py-5"><p class="text-center tracking-wider">Find Pokemon</p></Button>
                    </Link>
                </div>

            </div>

        </>
    );
}

export default Welcome;