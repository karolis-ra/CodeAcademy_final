import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Box } from './Wrappers/Box';
import { decrement } from '../state/quiz/reducer';
interface Props {
  quizLength: number;
  questionNumber: number;
}
export const QuizHeader = (props: Props) => {
  const dispatch = useDispatch();
  const handleBackClick = () => {
    dispatch(decrement());
  };
  const backRender = () => {
    if (props.questionNumber > 0 && props.questionNumber <= 9) {
      return (
        <StyledBox onClick={handleBackClick}>
          <Span>{'<'}</Span>Back
        </StyledBox>
      );
    }
    return (
      <StyledLink to="/">
        <Span>{'<'}</Span>Back
      </StyledLink>
    );
  };

  return (
    <StyledWrapper>
      <Box>{backRender()}</Box>
      <Box fontWeight="600">{`${props.questionNumber + 1} of ${props.quizLength}`}</Box>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px 18px 25px 24px;
  font-size: 24px;
  color: #212121;
  align-items: center;
`;

const Span = styled.span`
  color: #aa00ff;
  margin-right: 20px;
  font-weight: bold;
  font-family: Roboto;
`;

const StyledLink = styled(Link)`
  color: #212121;
  font-weight: 600;
`;

const StyledBox = styled(Box)`
  color: #212121;
  font-weight: 600;
`;
