import { Landing } from 'pages/Landing';
import { Quiz } from 'pages/Quiz';
import { Results } from 'pages/Results';

import { useNavigation } from 'hooks/useNavigation';

const App = () => {
  const { currentStep } = useNavigation();

  switch (currentStep) {
    case 1:
    case 2:
      return <Quiz step={currentStep} />;
    case 3:
      return <Results />;
    default:
      return <Landing />;
  }
};

export default App;
