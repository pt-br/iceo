import { useMemo } from 'react';

import { Page } from 'components/Page';
import { Heading } from 'components/Heading';
import { Paragraph } from 'components/Paragraph';
import { Chart } from 'components/Chart';
import { Button } from 'components/Button';
import { MediaCard } from 'components/MediaCard';

import { getOptions as Manager5to6Options } from 'model/Manager5to6';
import { mediaCards } from 'model/MediaCards';

import { useChartData } from 'hooks/useChartData';
import { useNavigation } from 'hooks/useNavigation';

import {
  SuggestionsTitleWrapper,
  MediaCardsWrapper,
} from './Results.style';

export const Results = () => {
  const { resetFlow } = useNavigation();
  const { mappedChartData } = useChartData();

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
      <Paragraph mg="0 0 50px">
        Here’s what we’ll use to plot a course for your own development
      </Paragraph>
      <Chart options={Manager5to6Options(mappedChartData)} />
      <SuggestionsTitleWrapper>
        <Heading type={2} mg="45px 0 0">
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
      <Button type={2} onClick={resetFlow} mg="300px 0 0">
        RESET (Test)
      </Button>
    </Page>
  );
};
