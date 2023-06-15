import styled from 'styled-components';

import { media } from 'utils';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  max-width: 1040px;

  ${media.tablet`
    margin: 80px 100px;
  `};

  ${media.desktop`
    margin: 80px auto;
    padding: 0 200px;
  `};
`;
