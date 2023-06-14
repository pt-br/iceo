import styled from 'styled-components';

import { colors } from 'utils';

export const ButtonWrapper = styled.div`
  cursor: pointer;
  max-width: 200px;
  padding: 13px 0;
  background-color: ${colors.button};
`;

export const ButtonText = styled.div`
  color: ${colors.button_text};
  font-size: 16px;
`;
