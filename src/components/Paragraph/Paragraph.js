import { Regular, Small } from './Paragraph.style';

export const Paragraph = ({ children, mg, small = false }) => {
  if (small) {
    return <Small mg={mg}>{children}</Small>;
  }

  return <Regular mg={mg}>{children}</Regular>;
};
