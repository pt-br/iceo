import { Button } from 'components/Button';
import { Heading } from 'components/Heading';
import { Question } from 'components/Question/Question';
import { Step } from 'components/Step';
import { ButtonContainer } from './Quiz.style';
import { Page } from 'components/Page';
import { Paragraph } from 'components/Paragraph';
import { getMappedVote, getQuizData } from './utils';

import { useNavigation } from 'hooks/useNavigation';
import { useChartData } from 'hooks/useChartData';

export const Quiz = () => {
  const { sliderData, setChartData } = useChartData();

  const { currentStep, goBack, goForward } = useNavigation();

  const quizData = getQuizData(currentStep);

  const onChange = (idx, opt) => {
    const offset = currentStep !== 1 ? 6 : 0;
    const mappedVal = getMappedVote(opt);

    setChartData(prevState => ({
      ...prevState,
      [idx + offset]: mappedVal,
    }));
  };

  return (
    <Page>
      <Step>{currentStep}</Step>
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
          value={sliderData[(currentStep !== 1 ? 6 : 0) + idx]}
        />
      ))}
      <ButtonContainer>
        {currentStep > 1 ? (
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
