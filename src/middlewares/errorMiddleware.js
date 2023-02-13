import axiosInstance from '../utils/axiosInstance';

const error = store => next => async action => {
  const {
    user: { user },
  } = store.getState();
  const match = /(.*)_(FAIL)/.exec(action.type);

  if (match) {
    await axiosInstance.post('errors', {
      user,
      ...action.payload,
      createdAt: new Date(),
    });
  }

  next(action);
};

export default error;
