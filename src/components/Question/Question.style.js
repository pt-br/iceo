import styled from 'styled-components';
import { colors } from 'utils';

export const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 32px 52px;
  gap: 30px;
  justify-content: space-between;
  background: ${props => (props.background ? colors.lightGrey : colors.white)};
`;

export const QuestionDetails = styled.div``;

export const QuestionBullets = styled.ul`
  padding-left: 25px;
`;

export const Bullet = styled.li``;

export const AnswerContainer = styled.div`
  width: 400px;
`;
