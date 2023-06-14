import { Page } from 'components/Page';
import { Heading } from 'components/Heading';
import { Paragraph } from 'components/Paragraph';
import { Button } from 'components/Button';

import {
  LandingCenter,
  LandingWrapper,
  LeftWrapper,
  RightWrapper,
  MockChart,
} from './Landing.style';

import mockChart from 'assets/mockChart.svg';

export const Landing = () => {
  return (
    <Page>
      <LandingCenter>
        <LandingWrapper>
          <LeftWrapper>
            <Heading>Let's start!</Heading>
            <Paragraph mg="0 0 24px">
              Lorem ipsum dolor sit amet consectetur. Tellus nisi turpis dolor pharetra amet dis
              pellentesque etiam pharetra.
            </Paragraph>
            <Button onClick={() => console.log('onclick fn')} mg="0 0 10px">
              Start
            </Button>
          </LeftWrapper>
          <RightWrapper>
            <MockChart src={mockChart} />
          </RightWrapper>
        </LandingWrapper>
      </LandingCenter>
    </Page>
  );
};
