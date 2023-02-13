const logger = store => next => action => {
  console.log('Store', store.getState());
  next(action);
};

export default logger;
