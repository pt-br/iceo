import { Page } from 'components/Page';
import { Heading } from 'components/Heading';
import { Paragraph } from 'components/Paragraph';
import { Button } from 'components/Button';
import { Step } from 'components/Step';

import { Results } from 'pages/Results';
import { Question } from 'components/Question/Question';

export const Components = () => {
  return (
    <Page>
      <Step mg="0 0 40px">1</Step>
      <Heading>Heading</Heading>
      <Paragraph mg="0 0 20px">Paragraph</Paragraph>
      <Button onClick={() => {}} mg="0 0 10px">
        Button type 1
      </Button>
      <Button type={2} onClick={() => {}}>
        Button type 2
      </Button>
      <Results />
      <Question title="jorge amado" details={['bullet', 'train']} />
      <Question background title="jorge odiado" details={['max width', 'fit content', 'perfeito']} />
    </Page>
  );
};
