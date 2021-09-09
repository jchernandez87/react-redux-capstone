import reducer from '../redux/CategorySlice';

test('Return initialState', () => {
  expect(reducer(undefined, {})).toEqual({
    list: [],
    status: 'idle',
    todayCases: 0,
  });
});
