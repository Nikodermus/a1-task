import { parseURLParams, createURLParams } from './url';

describe('createURLParams', () => {
  it('creates a URL given any object of params', () => {
    expect(createURLParams('test', { key: 'value' })).toEqual('test?key=value');

    expect(createURLParams('test', { sort: 'asc', page: 2, size: 20 })).toEqual(
      'test?sort=asc&page=2&size=20'
    );
  });

  it('removes empty keys when building a URL', () => {
    expect(
      createURLParams('test', { sort: 'a', page: NaN, search: '' })
    ).toEqual('test?sort=a');
  });
});

describe('parseURLParams', () => {
  it('decodes as object a URL search string', () => {
    expect(parseURLParams('?page=1')).toEqual({ page: '1' });

    expect(parseURLParams('?page=1&test=solution&more=123&next=dog')).toEqual({
      page: '1',
      test: 'solution',
      more: '123',
      next: 'dog',
    });
  });
});
