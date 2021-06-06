import { Box, Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { getCurrentURLParams } from '../utils/url';
import ButtonLikeLink from './ButtonLikeLink';
import usePushParams from '../hooks/usePushParams';

export interface PaginationProps {
  count: number;
}

const StyledBox = styled(Box)`
  gap: 12px;
`;

const Pagination: React.FC<PaginationProps> = ({ count }) => {
  const push = usePushParams();
  const [page, setPage] = useState(
    () => Number(getCurrentURLParams().page) || 1
  );

  const inFirst = page === 1;
  const inLast = page === count;

  useEffect(() => {
    push({ page });
  }, [page, push]);

  useEffect(() => {
    setPage(1);
  }, [count]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [page]);

  return (
    <StyledBox
      alignItems="center"
      display="flex"
      flexDirection="row"
      justifyContent="center"
      p={3}
      width="100%"
    >
      <ButtonLikeLink
        disabled={inFirst}
        onClick={() => setPage(1)}
        type="button"
      >
        First
      </ButtonLikeLink>
      <ButtonLikeLink
        disabled={inFirst}
        onClick={() => setPage((current) => current - 1)}
        type="button"
      >
        Previous
      </ButtonLikeLink>

      <Typography variant="subtitle2">{`Page ${page} of ${count}`}</Typography>

      <ButtonLikeLink
        disabled={inLast}
        onClick={() => setPage((current) => current + 1)}
        type="button"
      >
        Next
      </ButtonLikeLink>
      <ButtonLikeLink
        disabled={inLast}
        onClick={() => setPage(count)}
        type="button"
      >
        Last
      </ButtonLikeLink>
    </StyledBox>
  );
};

export default Pagination;
