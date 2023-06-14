import { StepWrapper, StepText } from './Step.style';

export const Step = ({ children, mg }) => {
  return (
    <StepWrapper mg={mg}>
      <StepText>{children}</StepText>
    </StepWrapper>
  );
};
