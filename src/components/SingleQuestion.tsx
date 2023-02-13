import React from 'react';
import styled from 'styled-components';
import { increment, singleSelect, Option } from '../state/quiz/reducer';
import { useDispatch } from 'react-redux';
import { FlexWrapper } from './Wrappers/FlexWrapper';
import { OptionBlock } from './Wrappers/OptionBlock';
import { H1 } from './Wrappers/H1';

interface Props {
  title: string;
  options: Option[];
  questionKey: string;
}

export const SingleQuestion: React.FC<Props> = (props) => {
  const dispatch = useDispatch();

  const handleClick = (e: any) => {
    const key = props.questionKey;
    const userAnswer = [key, e.target.id];
    dispatch(singleSelect(userAnswer));
    dispatch(increment());
  };
  return (
    <>
      <H1>{props.title}</H1>
      <FlexWrapper gap="8px" flexDirection="column">
        {props.options.map((singleOption, index) => {
          return (
            <OptionBlock key={index} onClick={handleClick} id={singleOption.value}>
              <>
                <StyledSpan onClick={handleClick}>{singleOption.label}</StyledSpan>
                <StyledImg src="/images/rarr.png" />
              </>
            </OptionBlock>
          );
        })}
      </FlexWrapper>
    </>
  );
};

const StyledSpan = styled.span`
  font-size: 18px;
  font-family: Roboto;
  z-index: -1;
`;
const StyledImg = styled.img`
  object-fit: contain;
  width: 25px;
  z-index: -1;
`;
