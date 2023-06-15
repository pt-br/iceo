import { Heading } from 'components/Heading';
import { Paragraph } from 'components/Paragraph';

import arrowIcon from 'assets/arrow.svg';

import {
  MediaCardWrapper,
  CategoryTitleWrapper,
  ContentWrapper,
  ImageWrapper,
  TextWrapper,
  Title,
  Arrow,
  ArticleImg,
} from './MediaCard.style';

export const MediaCard = ({ categoryTitle, title, image, link }) => {
  return (
    <MediaCardWrapper href={link} target="_blank">
      <CategoryTitleWrapper>
        <Heading type={3}>{categoryTitle}</Heading>
        <Arrow src={arrowIcon} />
      </CategoryTitleWrapper>
      <ContentWrapper>
        <ImageWrapper>
          <ArticleImg src={image} />
        </ImageWrapper>
        <TextWrapper>
          <Title mg="0 0 6px">{title}</Title>
        </TextWrapper>
      </ContentWrapper>
    </MediaCardWrapper>
  );
};
