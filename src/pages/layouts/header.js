import React from 'react';
import styled from "@emotion/styled";

const Heading = styled.div`
color:#F4C537;
font-weight: 900
`;

const Desc = styled.div`
font-weight: 400;
font-size:12px;
color:#d3d3d3;
`
const Hero = (props) => {
    return (
        <>
            <div className="flex flex-col my-10">
                <Heading className="text-3xl">{props.title}</Heading>
                <Desc className="text-sm font-light">{props.desc}</Desc>
            </div>
        </>
    );
}

export default Hero;