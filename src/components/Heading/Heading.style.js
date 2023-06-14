import styled, { css } from 'styled-components';

import { colors } from 'utils';

const DefaultStyle = css`
  color: ${colors.black};
  margin: 0 0 16px 0;
`;

export const H1 = styled.h1`
  ${DefaultStyle};

  font-weight: 600;
  ${props => props.mg && `margin: ${props.mg}`};
`;

export const H3 = styled.h3`
  ${DefaultStyle};

  font-weight: 500;
  ${props => props.mg && `margin: ${props.mg}`};
`;

export const H4 = styled.h4`
  ${DefaultStyle};

  font-weight: 500;
  ${props => props.mg && `margin: ${props.mg}`};
`;
