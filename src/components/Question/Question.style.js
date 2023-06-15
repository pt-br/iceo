import styled from 'styled-components';
import { colors } from 'utils';

export const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 32px 52px;
  gap: 30px;
  justify-content: space-between;
  background: ${props =>
    props.background ? colors.light_grey : colors.white};
`;

export const QuestionDetails = styled.div`
  flex-basis: 60%;
`;

export const QuestionBullets = styled.ul`
  padding-left: 25px;
`;

export const Bullet = styled.li``;

export const AnswerContainer = styled.div`
  width: 100%;
  flex-basis: 40%;
  align-self: center;
`;
