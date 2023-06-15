import { Page } from 'components/Page';
import { Heading } from 'components/Heading';
import { Paragraph } from 'components/Paragraph';
import { Button } from 'components/Button';

import { useNavigation } from 'hooks/useNavigation';

import {
  LandingCenter,
  LandingWrapper,
  LeftWrapper,
  RightWrapper,
  MockChart,
} from './Landing.style';

import mockChart from 'assets/mockChart.svg';

export const Landing = () => {
  const { goForward } = useNavigation();

  return (
    <Page>
      <LandingCenter>
        <LandingWrapper>
          <LeftWrapper>
            <Heading>Welcome to iCEO!</Heading>
            <Paragraph mg="0 0 24px">
              You are the CEO of your own career!
            </Paragraph>
            <Button mg="0 0 10px" onClick={goForward}>
              Let's Go!
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
