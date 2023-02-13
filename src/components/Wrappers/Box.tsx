import styled from 'styled-components';

interface BoxProps {
  flex?: number;
  flexDirection?: string;
  maxWidth?: number;
  margin?: string;
  alignContent?: string;
  justifyContent?: string;
  padding?: string;
  fontWeight?: string;
}
export const Box = styled.div<BoxProps>`
  max-width: ${(props) => props.maxWidth}px;
  margin: ${(props) => props.margin};
  align-content: ${(props) => props.alignContent};
  justify-content: ${(props) => props.justifyContent};
  padding: ${(props) => props.padding};
  font-weight: ${(props) => props.fontWeight};
`;
