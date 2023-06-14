import styled, { css } from 'styled-components';

import { colors } from 'utils';

const DefaultStyle = css`
  color: ${colors.gray_6};
`;

export const Regular = styled.div`
  ${DefaultStyle};
  font-size: 16px;
`;

export const Small = styled.div`
  ${DefaultStyle};
  font-size: 14px;
`;
