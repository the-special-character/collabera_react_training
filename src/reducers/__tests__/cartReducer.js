import { CartReducder } from '../cartReducer';

describe('Cart reducer', () => {
  //   beforeAll(() => {
  //     // set a data
  //     console.log('Before all positive test scenario');
  //   });

  //   beforeEach(() => {
  //     console.log('Before each positive test scenario');
  //   });

  //   afterEach(() => {
  //     console.log('after each positive test scenario');
  //   });

  //   afterAll(() => {
  //     console.log('after all positive test scenario');
  //   });

  const data = [
    {
      productId: 3,
      quantity: 1,
      id: 3,
    },
  ];

  const item = {
    productId: 4,
    quantity: 1,
    id: 4,
  };

  test('LOAD_CART_SUCCESS', () => {
    expect(
      CartReducder(undefined, { type: 'LOAD_CART_SUCCESS', payload: data }),
    ).toEqual(data);
  });

  test('ADD_CART_SUCCESS', () => {
    expect(
      CartReducder(data, { type: 'ADD_CART_SUCCESS', payload: item }),
    ).toEqual([...data, item]);
  });

  test('UPDATE_CART_SUCCESS', () => {
    expect(
      CartReducder([...data, item], {
        type: 'UPDATE_CART_SUCCESS',
        payload: { ...item, quantity: 2 },
      }),
    ).toEqual([...data, { ...item, quantity: 2 }]);
  });

  test('DELETE_CART_SUCCESS', () => {
    expect(
      CartReducder([...data, item], {
        type: 'DELETE_CART_SUCCESS',
        payload: item,
      }),
    ).toEqual(data);
  });

  test('rendom type', () => {
    expect(CartReducder(data, { type: 'RENDOM_TYPE' })).toEqual(data);
  });
});
