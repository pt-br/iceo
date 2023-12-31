import styled, { css } from 'styled-components';

import { colors } from 'utils';

const DefaultStyle = css`
  color: ${colors.gray};
`;

export const Regular = styled.div`
  ${DefaultStyle};

  font-size: 16px;
  ${props => props.mg && `margin: ${props.mg}`};
`;

export const Small = styled.div`
  ${DefaultStyle};

  font-size: 14px;
  ${props => props.mg && `margin: ${props.mg}`};
`;
