import { useCallback, useState } from 'react';

// Concept of Code Reusability
const useAppStatus = () => {
  const [appStatus, setAppStatus] = useState([]);

  const loadStatus = useCallback(({ type, id = -1 }) => {
    setAppStatus(val => [...val, { type, action: 'REQUEST', id }]);
  }, []);

  const errorStatus = useCallback(({ type, id = -1, error }) => {
    setAppStatus(val =>
      val.map(x => {
        if (x.type === type && x.id === id) {
          return { ...x, action: 'ERROR', errorMessage: error.message };
        }
        return x;
      }),
    );
  }, []);

  const successStatus = useCallback(({ type, id = -1 }) => {
    setAppStatus(val => val.filter(x => !(x.type === type && x.id === id)));
  }, []);

  return {
    appStatus,
    loadStatus,
    errorStatus,
    successStatus,
  };
};

export default useAppStatus;
