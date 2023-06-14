import { H1, H3, H4 } from './Heading.style';

export const Heading = ({ children, type = 1 }) => {
  switch (type) {
    case 3:
      return <H3>{children}</H3>;
    case 4:
      return <H4>{children}</H4>;
    default:
      return <H1>{children}</H1>;
  }
};
