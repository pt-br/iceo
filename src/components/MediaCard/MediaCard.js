import { Heading } from 'components/Heading';
import { Paragraph } from 'components/Paragraph';

import arrowIcon from 'assets/arrow.svg';

import {
  MediaCardWrapper,
  CategoryTitleWrapper,
  ContentWrapper,
  ImageWrapper,
  TextWrapper,
  Arrow,
  ArticleImg,
} from './MediaCard.style';

export const MediaCard = ({
  categoryTitle,
  title,
  description,
  image,
  link,
}) => {
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
          <Paragraph mg="0 0 2px">{title}</Paragraph>
          <Paragraph small description>
            {description}
          </Paragraph>
        </TextWrapper>
      </ContentWrapper>
    </MediaCardWrapper>
  );
};
