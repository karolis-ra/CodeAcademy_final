import React from "react";
import styled from "styled-components";
import { CenteredWrapper } from "../components/Wrappers/CenteredWrapper";

export const ThankYouPage = () => {
    return (
    <CenteredWrapper>
        <Header>Big THANKS for CodeAcademy and especially for Mindaugas Jačionis!</Header>
        <StyledImg src="./images/heart.png"/>
    </CenteredWrapper>
        )
}

const Header = styled.h1`
  text-align: center;
  color: #212121;
  font-size: 24px;
`;

const StyledImg = styled.img`
    width: 50px;
`