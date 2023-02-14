import React, { useEffect } from "react";
import { Loader } from "../components/Loader";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CenteredWrapper } from "../components/Wrappers/CenteredWrapper";

export const LoadingPage = () => {
  const [start, setStart] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (start < 85) {
        setStart(start + 1);
      } else {
        navigate("/thankyou");
      }
    }, 30);
    return () => clearTimeout(timer);
  }, [start, navigate]);

  return (
    <CenteredWrapper>
      <Header>Analizing your data...</Header>
      <Loader filler={start} />
    </CenteredWrapper>
  );
};

const Header = styled.h1`
  color: #212121;
  font-size: 24px;
`;
