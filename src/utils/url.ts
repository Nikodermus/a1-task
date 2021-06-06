import { parseURLParams } from './string';

export const getCurrentURLParams = (): Record<string, string> =>
  parseURLParams(window.location.search);

export const formatNumber = (number: number): string =>
  new Intl.NumberFormat('de-DE').format(number);
