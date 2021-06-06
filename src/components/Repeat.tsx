import { Fragment } from 'react';

export interface RepeatProps {
  quantity: number;
}

const Repeat: React.FC<RepeatProps> = ({ quantity, children }) => {
  return (
    <>
      {Array.from({ length: quantity }).map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Fragment key={index}>{children}</Fragment>
      ))}
    </>
  );
};

export default Repeat;
