import { useMemo } from 'react';

import { Page } from 'components/Page';
import { Heading } from 'components/Heading';
import { Paragraph } from 'components/Paragraph';
import { Chart } from 'components/Chart';
import { Button } from 'components/Button';
import { MediaCard } from 'components/MediaCard';

import { options as Manager5to6Options } from 'model/Manager5to6';
import { mediaCards } from 'model/MediaCards';

import { useNavigation } from 'hooks/useNavigation';

import {
  SuggestionsTitleWrapper,
  MediaCardsWrapper,
} from './Results.style';

export const Results = () => {
  const { goBack } = useNavigation();

  const mediaCardsRender = useMemo(() => {
    return mediaCards.map(
      ({ categoryTitle, title, description, image, link }) => (
        <MediaCard
          categoryTitle={categoryTitle}
          title={title}
          description={description}
          image={image}
          link={link}
        />
      )
    );
  }, []);

  return (
    <Page>
      <Heading>Here is your Career Journey Map</Heading>
      <Paragraph mg="0 0 90px">
        Here’s what we’ll use to plot a course for your own development
      </Paragraph>
      <Chart options={Manager5to6Options} />
      <SuggestionsTitleWrapper>
        <Heading type={2} mg="170px 0 0">
          Here’s how you can embrace those opportunities for improvement
          and get you on a path toward promotion.
        </Heading>
      </SuggestionsTitleWrapper>
      <Paragraph small>
        So you have some gaps? Congratulations, you’re human!
      </Paragraph>
      <Paragraph mg="20px 0 48px">
        Here are a few resources, both internal and external, that can help
        you bridge the gap between where you are and where your manager
        needs you to be to achieve your next level.
      </Paragraph>
      <MediaCardsWrapper>{mediaCardsRender}</MediaCardsWrapper>
      <Button type={2} onClick={goBack}>
        GO_BACK_TEST
      </Button>
    </Page>
  );
};
