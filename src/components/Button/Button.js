import { ButtonWrapper, ButtonText } from './Button.style';

export const Button = ({ children, onClick }) => {
  return (
    <ButtonWrapper onClick={onClick}>
      <ButtonText>{children}</ButtonText>
    </ButtonWrapper>
  );
};
