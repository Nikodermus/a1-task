import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { createURLParams } from '../utils/string';
import { getCurrentURLParams } from '../utils/url';

type Callback = (params: Record<string, string | number>) => void;

const usePushParams = (): Callback => {
  const { push } = useHistory();

  const callback: Callback = useCallback(
    (params) => {
      push({
        search: createURLParams('', {
          ...getCurrentURLParams(),
          ...params,
        }),
      });
    },
    [push]
  );

  return callback;
};

export default usePushParams;
