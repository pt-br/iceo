import createPersistedState from 'use-persisted-state';
import { useCallback } from 'react';

const useStepState = createPersistedState('step');

export const useNavigation = () => {
  const [step, setStep] = useStepState(0);

  const goBack = useCallback(() => {
    if (step === 0) {
      return;
    }

    setStep(step - 1);
  }, [step, setStep]);

  const goForward = useCallback(() => {
    setStep(step + 1);
  }, [step, setStep]);

  return {
    currentStep: step,
    goBack,
    goForward,
  };
};
