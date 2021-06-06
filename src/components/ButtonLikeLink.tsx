import { Link, LinkTypeMap } from '@material-ui/core';

import type { MouseEventHandler } from 'react';

import styled, { css } from 'styled-components';

type ButtonLikeLinkProps = Partial<Omit<LinkTypeMap, 'href'>> & {
  disabled?: boolean;
  onClick: (e: MouseEventHandler) => void;
  type?: string;
};

const StyledLink = styled(Link)<{ disabled?: boolean }>`
  ${({ disabled }) =>
    disabled &&
    css`
      filter: grayscale(1);
      pointer-events: none;
    `}
`;

const ButtonLikeLink: React.FC<ButtonLikeLinkProps> = ({
  children,
  ...props
}) => {
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <StyledLink component="button" {...props}>
      {children}
    </StyledLink>
  );
};

export default ButtonLikeLink;
