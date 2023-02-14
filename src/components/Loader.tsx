import styled from 'styled-components';
import React from 'react';

interface Props {
  filler: number;
}

export const Loader: React.FC<Props> = (props) => {
  return (
    <StyledWrapper>
      <ActiveLine filler={props.filler} />
      <InactiveLine filler={props.filler} />
    </StyledWrapper>
  );
};

interface FillerProps {
  filler: number;
}

const StyledWrapper = styled.div`
  display: flex;
  width: 360px;
  max-height: 8px
`;

const ActiveLine = styled.div<FillerProps>`
  border: 5px solid #aa00ff;
  flex: ${(props) => props.filler};
  transition: 0.3s;
  border-radius: 8px;
`;

const InactiveLine = styled.div<FillerProps>`
  border: 5px solid #eeeeee;
  flex: ${(props) => 100 - props.filler};
  transition: 0.3s;
  border-radius: 8px;
`;
