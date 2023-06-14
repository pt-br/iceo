import styled from 'styled-components';

import { colors } from 'utils';

export const StepWrapper = styled.div`
  user-select: none;
  padding: 12px 20px;
  max-width: fit-content;
  text-align: center;
  background-color: ${colors.light_green};

  ${props => props.mg && `margin: ${props.mg}`};
`;

export const StepText = styled.div`
  color: ${colors.black};
  font-size: 18px;
  font-weight: 600;
`;
