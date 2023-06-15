import { useCallback } from 'react';
import createPersistedState from 'use-persisted-state';

const useStepState = createPersistedState('step');

const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export const useNavigation = () => {
  const [step, setStep] = useStepState(0);

  const goBack = useCallback(() => {
    if (step === 0) {
      return;
    }

    setStep(step - 1);
    scrollTop();
  }, [step, setStep]);

  const goForward = useCallback(() => {
    setStep(step + 1);
    scrollTop();
  }, [step, setStep]);

  return {
    currentStep: step,
    goBack,
    goForward,
  };
};
