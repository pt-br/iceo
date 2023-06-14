import { Page } from 'components/Page';
import { Heading } from 'components/Heading';
import { Paragraph } from 'components/Paragraph';
import { Button } from 'components/Button';

import { Results } from 'pages/Results';

export const Landing = () => {
  return (
    <Page>
      <Heading>heading</Heading>
      <Paragraph>paragraphhhhh</Paragraph>
      <Button onClick={() => console.log('hehe')}>olaaaaaa</Button>
      <Results />
    </Page>
  );
};
