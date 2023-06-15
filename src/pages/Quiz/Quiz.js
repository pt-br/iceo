import { useEffect, useState } from 'react';
import { Button } from 'components/Button';
import { Heading } from 'components/Heading';
import { Question } from 'components/Question/Question';
import { Step } from 'components/Step';
import { ButtonContainer } from './Quiz.style';
import { Page } from 'components/Page';
import { Paragraph } from 'components/Paragraph';
import { getMappedVote, getQuizData } from './utils';

export const Quiz = ({ step = 1, goBack, goForward }) => {
  const [chartData, setChartData] = useState({});

  const quizData = getQuizData(step);

  const onChange = (idx, opt) => {
    const offset = step !== 1 ? 6 : 0;
    const mappedVal = getMappedVote(opt);

    setChartData(prevState => ({
      ...prevState,
      [idx + offset]: mappedVal,
    }));
  };

  useEffect(() => {
    console.log('>>>', chartData);
  }, [chartData]);

  return (
    <Page>
      <Step>{step}</Step>
      <Heading type={2} mg="16px 0">
        {quizData.title}
      </Heading>
      <Paragraph mg="0 0 40px 0" small>
        {quizData.subtitle}
      </Paragraph>
      {quizData.questions.map((question, idx) => (
        <Question
          onChange={opt => onChange(idx, opt)}
          title={question.title}
          details={question.details}
          background={!(idx % 2)}
        />
      ))}
      <ButtonContainer>
        {step > 1 ? (
          <Button type={2} onClick={goBack}>
            Back
          </Button>
        ) : (
          <div />
        )}
        <Button onClick={goForward}>Next</Button>
      </ButtonContainer>
    </Page>
  );
};