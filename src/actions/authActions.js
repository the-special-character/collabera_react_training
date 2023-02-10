import axiosInstance from '../utils/axiosInstance';

export const loginAction = (values, actions) => async dispatch => {
  try {
    dispatch({ type: 'LOGIN_REQUEST', meta: { loadingId: -1 } });
    const res = await axiosInstance.post('login', values);
    localStorage.setItem('token', JSON.stringify(res));
    actions.resetForm();
    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: res,
      meta: { loadingId: -1 },
    });
  } catch (error) {
    actions.setErrors({ serverError: error.message });
    dispatch({
      type: 'LOGIN_FAIL',
      payload: {
        message: error.message,
      },
      meta: { loadingId: -1 },
    });
  }
};

export const registerAction = async (values, actions) => async dispatch => {
  try {
  } catch (error) {}
};
