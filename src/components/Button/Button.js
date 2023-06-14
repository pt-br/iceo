import {
  ButtonWrapperType1,
  ButtonWrapperType2,
  ButtonTextType1,
  ButtonTextType2,
} from './Button.style';

export const Button = ({ children, mg, onClick, type = 1 }) => {
  if (type === 1) {
    return (
      <ButtonWrapperType1 onClick={onClick} mg={mg}>
        <ButtonTextType1>{children}</ButtonTextType1>
      </ButtonWrapperType1>
    );
  }

  return (
    <ButtonWrapperType2 onClick={onClick} mg={mg}>
      <ButtonTextType2>{children}</ButtonTextType2>
    </ButtonWrapperType2>
  );
};
