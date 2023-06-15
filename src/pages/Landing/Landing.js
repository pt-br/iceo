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
  const { goForward, goBack, currentStep } = useNavigation();

  console.log('### currentStep on Landing', currentStep);

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
            <Button mg="0 0 10px" onClick={goForward}>
              Start
            </Button>
            <Button type={2} mg="0 0 10px" onClick={goBack}>
              Go back
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
