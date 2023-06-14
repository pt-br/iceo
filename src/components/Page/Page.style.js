import styled from 'styled-components';

import { media } from 'utils';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;

  ${media.tablet`
    margin: 80px 100px;
  `};

  ${media.desktop`
    margin: 80px 200px;
  `};
`;
