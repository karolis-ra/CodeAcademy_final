import React from 'react';
import { DefaultButton } from '../components/DefaultButton';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Image } from '../components/Image';

export const Home = () => {
  return (
    <ContentWrapper>
      <LeftBox>
        <H1>Get back in shape.</H1>
        <Link to="/quiz">
          <DefaultButton label="Take quiz" width="250px" />
        </Link>
      </LeftBox>
      <RightBox>
        <Image src="images/Illustration.png" objectFit="contain" />
      </RightBox>
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  padding: 200px 50px;

  @media (min-width: 1200px) {
    padding: 0 120px;
    max-width: 1400px;
    margin: 0 auto;
    align-self: center;
    min-height: 100vh;
    flex-direction: row;
  }
`;

const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    align-self: center;
  }
`;

const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  align-self: center;
`;

const H1 = styled.h1`
  font-family: Roboto;
  color: #212121;
  @media (min-width: 1200px) {
    font-size: 64px;
    margin-bottom: 23px;
  }
`;
