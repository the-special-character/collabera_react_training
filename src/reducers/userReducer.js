const initialState = {
  accessToken: '',
  user: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'LOGIN_SUCCESS':
      return { ...state, ...payload };

    default:
      return state;
  }
};
