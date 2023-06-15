import { Heading } from 'components/Heading';
import {
  QuestionWrapper,
  QuestionDetails,
  QuestionBullets,
  Bullet,
  AnswerContainer,
} from './Question.style';
import { Paragraph } from 'components/Paragraph';
import { Slider } from 'components/Slider';

export const Question = ({ title, details, background, onChange }) => {
  return (
    <QuestionWrapper background={background}>
      <QuestionDetails>
        <Heading type={3}>{title}</Heading>
        <QuestionBullets>
          {details.map(detail => (
            <Bullet>
              <Paragraph>{detail}</Paragraph>
            </Bullet>
          ))}
        </QuestionBullets>
      </QuestionDetails>
      <AnswerContainer>
        <Slider onChange={onChange} />
      </AnswerContainer>
    </QuestionWrapper>
  );
};
