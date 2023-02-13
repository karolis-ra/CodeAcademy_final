import styled from 'styled-components';

interface ImageProps {
  objectFit?: string;
  src: string;
}

export const Image = styled.img<ImageProps>`
  width: 100%;
  object-fit: ${(props) => props.objectFit};
  content: url(${(props) => props.src});

  @media (max-width: 900px) {
    max-width: 100%;
    margin: 0 auto;
  }
`;
