import { useLocation } from 'react-router-dom';
import { parseURLParams } from '../utils/string';

const useURLParams = (): Record<string, string> => {
  const location = useLocation();
  const params = parseURLParams(location.search);

  return params;
};

export default useURLParams;
