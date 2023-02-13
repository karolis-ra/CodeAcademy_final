import styled from 'styled-components';
import React from 'react';
import { useSelector } from 'react-redux';
import { quizSelector } from '../pages/quiz/selectors';

// interface Props {
//   question?: number;
//   length?: number;
// }

export const Indicator: React.FC = () => {
  const { fetchedData, questionNum } = useSelector(quizSelector);
  return (
    <StyledWrapper>
      <ActiveLine step={questionNum} />
      <InactiveLine quizLength={fetchedData.length} step={questionNum} />
    </StyledWrapper>
  );
};

interface ActiveProps {
  step: number;
}

interface InactiveProps {
  quizLength: number;
  step: number;
}
const StyledWrapper = styled.div`
  display: flex;
`;

const ActiveLine = styled.div<ActiveProps>`
  border: 2px solid #aa00ff;
  flex: ${(props) => props.step + 1};
`;

const InactiveLine = styled.div<InactiveProps>`
  border: 2px solid #eeeeee;
  flex: ${(props) => props.quizLength - (props.step + 1)};
`;
