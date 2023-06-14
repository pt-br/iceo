import styled from 'styled-components';

import { colors } from 'utils';

export const ButtonWrapper = styled.div`
  cursor: pointer;
  user-select: none;
  border-radius: 6px;
  padding: 12px 18px;
  max-width: fit-content;
  text-align: center;
  transition: all 0.2s ease-in-out 0s;
  background-color: ${colors.button};
  ${props => props.mg && `margin: ${props.mg}`};

  &:hover {
    background-color: ${colors.button_hover};
  }
`;

export const ButtonText = styled.div`
  color: ${colors.button_text};
  font-size: 16px;
  font-weight: 600;
  text-transform: capitalize;
`;
