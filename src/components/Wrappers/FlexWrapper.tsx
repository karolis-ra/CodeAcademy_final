import styled from 'styled-components';

interface Props {
  flexDirection?: string;
  gap?: string;
  maxWidth?: string;
  textAlign?: string;
  marginBottom?: string;
}
export const FlexWrapper = styled.div<Props>`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  gap: ${(props) => props.gap};
  max-width: ${(props) => props.maxWidth};
  text-align: ${(props) => props.textAlign};
  margin-bottom: 24px;
`;
