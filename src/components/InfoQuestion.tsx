import React from 'react';
import { H1 } from './Wrappers/H1';
import { increment } from '../state/quiz/reducer';
import { useDispatch } from 'react-redux';
import { DefaultButton } from './DefaultButton';
import { FlexWrapper } from './Wrappers/FlexWrapper';

interface Props {
  title: string;
  description?: string;
}

export const InfoQuestion: React.FC<Props> = (props) => {
  const dispatch = useDispatch();

  const nextQuestion = () => {
    dispatch(increment());
  };
  return (
    <>
      <H1>{props.title}</H1>
      <FlexWrapper textAlign="center" maxWidth="90%">
        {props.description}
      </FlexWrapper>

      <DefaultButton width="90%" label="Ok lets do it" onClick={nextQuestion} />
    </>
  );
};
