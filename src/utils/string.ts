export const capitalize = (str: string): string =>
  str
    .split(' ')
    .map((word: string) =>
      word.replace(/^\w/, (letter: string) => letter.toLocaleUpperCase())
    )
    .join(' ');

export const createURLParams = (
  base: string,
  params: Record<string, string | number>
): string => {
  const url = new URLSearchParams();

  Object.entries(params)
    .filter(([, value]) => Boolean(value))
    .forEach(([key, value]) => url.append(key, String(value)));

  return `${base}?${url}`;
};

export const parseURLParams = (search: string): Record<string, string> => {
  const url = new URLSearchParams(search);
  const result: Record<string, string> = {};

  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of url.entries()) {
    result[key as string] = value;
  }

  return result;
};
