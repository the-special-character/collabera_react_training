import loadingReducer, { loadingInitialState } from '../loadingReducer';

const meta = { loadingId: -1 };

test('loading reducer', () => {
  expect(
    loadingReducer(undefined, {
      type: 'LOAD_PRODUCTS_REQUEST',
      meta,
    }),
  ).toEqual([
    {
      action: 'LOAD_PRODUCTS',
      ...meta,
    },
  ]);
});

test('should remove success entry', () => {
  expect(
    loadingReducer(
      [
        {
          action: 'LOAD_PRODUCTS',
          ...meta,
        },
      ],
      {
        type: 'LOAD_PRODUCTS_SUCCESS',
        meta,
      },
    ),
  ).toEqual([]);
});

test('should return initial state', () => {
  expect(
    loadingReducer(loadingInitialState, {
      type: 'LOAD_PRODUCTS_ERROR',
      meta,
    }),
  ).toEqual(loadingInitialState);
});
