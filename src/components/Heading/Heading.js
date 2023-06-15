import { H1, H2, H3, H4 } from './Heading.style';

export const Heading = ({ children, mg, type = 1 }) => {
  switch (type) {
    case 2:
      return <H2 mg={mg}>{children}</H2>;
    case 3:
      return <H3 mg={mg}>{children}</H3>;
    case 4:
      return <H4 mg={mg}>{children}</H4>;
    default:
      return <H1 mg={mg}>{children}</H1>;
  }
};
