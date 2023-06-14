import styled from 'styled-components';

import { media, colors } from 'utils';

export const LandingCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${media.tablet`
    height: 360px;
  `};

  ${media.desktop`
    height: 660px;
  `};
`;

export const LandingWrapper = styled.div`
  display: flex;
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RightWrapper = styled.div``;
