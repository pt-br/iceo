import { Regular, Small } from './Paragraph.style';

export const Paragraph = ({ children, small = false }) => {
  if (small) {
    return <Small>{children}</Small>;
  }

  return <Regular>{children}</Regular>;
};
