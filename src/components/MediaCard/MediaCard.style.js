import styled from 'styled-components';

import { colors, media } from 'utils';

export const MediaCardWrapper = styled.a`
  display: flex;
  flex-direction: column;
  max-width: 310px;
  padding: 20px;
  background-color: ${colors.light_grey};
  text-decoration: none;
`;

export const CategoryTitleWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const ImageWrapper = styled.div``;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Arrow = styled.img``;

export const ArticleImg = styled.img``;
