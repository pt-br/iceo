import styled, { css } from 'styled-components';

import { colors } from 'utils';

const DefaultStyle = css`
  cursor: pointer;
  user-select: none;
  border-radius: 6px;
  padding: 12px 18px;
  max-width: fit-content;
  text-align: center;
  transition: all 0.2s ease-in-out 0s;
`;

export const ButtonWrapperType1 = styled.div`
  ${DefaultStyle};

  background-color: ${colors.button};
  ${props => props.mg && `margin: ${props.mg}`};

  &:hover {
    background-color: ${colors.button_hover};
  }
`;
export const ButtonWrapperType2 = styled.div`
  ${DefaultStyle};

  background-color: ${colors.white};
  border: 1px solid ${colors.black};
  ${props => props.mg && `margin: ${props.mg}`};
`;

export const ButtonTextType1 = styled.div`
  color: ${colors.button_text};
  font-size: 16px;
  font-weight: 600;
  text-transform: capitalize;
`;

export const ButtonTextType2 = styled.div`
  color: ${colors.black};
  font-size: 16px;
  text-transform: capitalize;
`;
