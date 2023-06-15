import styled from 'styled-components';

import { Regular } from 'components/Paragraph/Paragraph.style';
import { colors, media } from 'utils';

export const MediaCardWrapper = styled.a`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  flex: 1;
  padding: 20px;
  background-color: ${colors.light_grey};
  text-decoration: none;

  ${media.tablet`
    max-width: 310px;
  `};
`;

export const CategoryTitleWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const ImageWrapper = styled.div``;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled(Regular)`
  text-decoration: underline;
`;

export const Arrow = styled.img``;

export const ArticleImg = styled.img``;
