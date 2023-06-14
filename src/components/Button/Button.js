import { ButtonWrapper, ButtonText } from './Button.style';

export const Button = ({ children, mg, onClick }) => {
  return (
    <ButtonWrapper onClick={onClick} mg={mg}>
      <ButtonText>{children}</ButtonText>
    </ButtonWrapper>
  );
};
