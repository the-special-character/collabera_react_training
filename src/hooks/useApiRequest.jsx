import { useCallback } from 'react';
import axiosInstance from '../utils/axiosInstance';

const useApiRequest = ({ dispatch, dispatchLoading, dispatchErrors }) => {
  const apiRequest = useCallback(
    async ({ apiData, type }) => {
      try {
        dispatchLoading({
          type: `${type}_REQUEST`,
          payload: { loadingId: apiData?.data?.productId || -1 },
        });
        dispatchErrors({ type: `${type}_REQUEST` });
        const res = await axiosInstance(apiData);
        dispatch({
          type: `${type}_SUCCESS`,
          payload: apiData.method === 'delete' ? apiData.data : res,
        });
        dispatchLoading({
          type: `${type}_SUCCESS`,
          payload: {
            payload: { loadingId: apiData?.data?.productId || -1 },
          },
        });
      } catch (err) {
        dispatchLoading({
          type: `${type}_FAIL`,
          payload: {
            payload: { loadingId: apiData?.data?.productId || -1 },
          },
        });
        dispatchErrors({
          type: `${type}_FAIL`,
          payload: { message: err.message },
        });
      }
    },
    [dispatch, dispatchLoading, dispatchErrors],
  );
  return apiRequest;
};

export default useApiRequest;
