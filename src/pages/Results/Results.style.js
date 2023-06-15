import styled from 'styled-components';

import { media } from 'utils';

export const SuggestionsTitleWrapper = styled.div`
  max-width: 660px;
`;

export const MediaCardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  ${media.tablet`
    flex-direction: row;
  `};
`;
