import { Components } from 'pages/Components';
import { Landing } from 'pages/Landing';
import { Quiz } from 'pages/Quiz';

import { useNavigation } from 'hooks/useNavigation';

const App = () => {
  const { currentStep } = useNavigation();

  switch (currentStep) {
    case 1:
    case 2:
      return <Quiz step={currentStep} />;
    case 3:
      return <Components />;
    default:
      return <Landing />;
  }
};

export default App;
