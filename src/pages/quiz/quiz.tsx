import React, { useEffect } from "react";
import { QuizHeader } from "../../components/QuizHeader";
import styled from "styled-components";
import { SingleQuestion } from "../../components/SingleQuestion";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../state/quiz/reducer";
import { quizSelector } from "./selectors";
import { MultiQuestion } from "../../components/MultiQuestion";
import { InfoQuestion } from "../../components/InfoQuestion";
import { Indicator } from "../../components/Indicator";
import { useNavigate } from "react-router-dom";

export const Quiz = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { fetchedData, fetching, questionNum, selected, finished } =
    useSelector(quizSelector);
  const question = fetchedData[questionNum];
  console.log("is quiz finished?", finished);
  useEffect(() => {
    if (!fetchedData?.length) {
      dispatch(fetchData());
    }
  }, []);

  if (fetching) {
    return <div>Loading...</div>;
  }

  const questionRender = () => {
    if (question.type === "single") {
      return (
        <SingleQuestion
          title={question.label}
          options={question.options}
          questionKey={question.key}
        />
      );
    }
    if (question.type === "multiple") {
      return (
        <MultiQuestion
          title={question.label}
          options={question.options}
          selected={selected}
          questionKey={question.key}
        />
      );
    }

    return (
      <InfoQuestion title={question.label} description={question.description} />
    );
  };

  return (
    <>
      {finished ? (
        navigate("/loading")
      ) : (
        <>
          <QuizHeader
            quizLength={fetchedData.length}
            questionNumber={questionNum}
          />
          <Indicator />
          <StyledWrapper>{questionRender()}</StyledWrapper>
        </>
      )}
    </>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
`;
