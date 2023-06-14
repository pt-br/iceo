import styled from 'styled-components';

import { media, colors } from 'utils';

export const LandingCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  max-width: 1000px;

  ${media.tablet`
    height: 360px;
  `};

  ${media.desktop`
    height: 660px;
  `};
`;

export const LandingWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  ${media.tablet`
    flex-direction: row;
    gap: 60px;
  `};
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
`;

export const RightWrapper = styled.div``;

export const MockChart = styled.img`
  width: 100%;
`;
