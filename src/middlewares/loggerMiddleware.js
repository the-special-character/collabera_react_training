const logger = store => next => action => {
  console.log('Store', store.getState());
  console.log('action', action);
  next(action);
};

export default logger;
