import { Page } from 'components/Page';
import { Heading } from 'components/Heading';
import { Paragraph } from 'components/Paragraph';
import { Button } from 'components/Button';
import { Step } from 'components/Step';

import { Results } from 'pages/Results';

export const Components = () => {
  return (
    <Page>
      <Step mg="0 0 40px">1</Step>
      <Heading>Heading</Heading>
      <Paragraph mg="0 0 20px">Paragraph</Paragraph>
      <Button onClick={() => console.log('onclick fn')} mg="0 0 10px">
        Button type 1
      </Button>
      <Button type={2} onClick={() => console.log('onclick fn')}>
        Button type 2
      </Button>
      <Results />
    </Page>
  );
};