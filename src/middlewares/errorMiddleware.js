const error = () => next => async action => {
  const { type, payload, meta } = action;
  const match = /(.*)_(FAIL)/.exec(type);
  if (match) {
    next({
      type,
      meta,
      payload: {
        message: payload.message,
        title: `${type
          .split('_')
          .map((x, i) => {
            if (i === 0) {
              return `${x[0].toUpperCase()}${x.slice(1).toLocaleLowerCase()}`;
            }
            return x.toLocaleLowerCase();
          })
          .join(' ')} fail`,
      },
    });
  } else {
    next(action);
  }

  //   const {
  //     user: { user },
  //   } = store.getState();
  //   const match = /(.*)_(FAIL)/.exec(action.type);

  //   if (match) {
  //     await axiosInstance.post('errors', {
  //       user,
  //       ...action.payload,
  //       createdAt: new Date(),
  //     });
  //   }

  //   next(action);
};

export default error;
