import React from 'react';
import styled from 'styled-components';

interface DefaultButtonProps {
  onClick?: () => void;
  width?: string;
  label?: string;
  padding?: string;
}

export const DefaultButton: React.FC<DefaultButtonProps> = ({ width, label, onClick }) => {
  return (
    <Button width={width} onClick={onClick}>
      {label}
    </Button>
  );
};

interface StyledBtnProps {
  width?: string;
  padding?: string;
}
const Button = styled.button<StyledBtnProps>`
  border: none;
  background-color: #aa00ff;
  width: ${(props) => props.width};
  padding: ${(props) => props.padding || '16px 52px'};
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
  font-weight: bold;
  font-family: 'Roboto';
  font-size: 20px;
  max-width: 80%;
`;
