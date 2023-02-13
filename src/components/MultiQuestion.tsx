import styled from 'styled-components';
import React from 'react';
import { H1 } from './Wrappers/H1';
import { increment, Option } from '../state/quiz/reducer';
import { OptionBlock } from './Wrappers/OptionBlock';
import { useDispatch } from 'react-redux';
import { DefaultButton } from './DefaultButton';
import { FlexWrapper } from './Wrappers/FlexWrapper';
import { multiSelect, removeOptions } from '../state/quiz/reducer';
import { answerObject } from '../state/quiz/reducer';

interface Props {
  title: string;
  options: Option[];
  selected: answerObject;
  questionKey: string;
}

export const MultiQuestion: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const selectedAnswers = props.selected[props.questionKey]
    ? props.selected[props.questionKey].split('|')
    : [];
  const answers: string[] = [];

  const handleOptionSelect = (e: any) => {
    const index = answers.indexOf(e.target.id);
    answers.includes(e.target.id) ? answers.splice(index, 1) : answers.push(e.target.id);
    const key = props.questionKey;
    const answerString = answers.join('|');

    const selectedAnswers = [key, answerString];
    dispatch(multiSelect(selectedAnswers));
  };

  const nextQuestion = () => {
    dispatch(increment());
  };

  const removeSelected = (e: any) => {
    const data = [props.questionKey, e.target.id];
    dispatch(removeOptions(data));
  };

  return (
    <>
      <H1>{props.title}</H1>
      <FlexWrapper flexDirection="column" gap="8px">
        {props.options.map((singleOption, index) => {
          return (
            <OptionBlock
              key={index}
              onClick={singleOption.custom?.deselectAll ? removeSelected : handleOptionSelect}
              id={singleOption.value}
              active={selectedAnswers.includes(singleOption.value) ? true : false}>
              <>
                <StyledSpan>{singleOption.label}</StyledSpan>
                <StyledImg
                  src={
                    selectedAnswers.includes(singleOption.value)
                      ? '/images/check_active.png'
                      : '/images/check_disabled.png'
                  }
                />
              </>
            </OptionBlock>
          );
        })}
      </FlexWrapper>

      <DefaultButton width="90%" label="Continue" onClick={nextQuestion} />
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
