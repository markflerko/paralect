import { useEffect } from 'react';
import { getAuthThunk, getRefreshThunk } from 'redux/thunks';
import { useAppDispatch, useAppSelector } from '../reduxHooks';

export const useAuth = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const authLogic = async () => {
      const refreshToken = localStorage.getItem(
        process.env.REACT_APP_REFRESH_TOKEN_STORAGE_NAME as string,
      );
      if (!refreshToken) {
        const { refresh_token } = await dispatch(getAuthThunk()).unwrap();
        localStorage.setItem(
          process.env.REACT_APP_REFRESH_TOKEN_STORAGE_NAME as string,
          refresh_token,
        );
      } else {
        const { refresh_token } = await dispatch(getRefreshThunk()).unwrap();
        localStorage.setItem(
          process.env.REACT_APP_REFRESH_TOKEN_STORAGE_NAME as string,
          refresh_token,
        );
      }
    };
    authLogic();
  }, [dispatch]);

  const { isAuth, isError, isLoaded, message } = useAppSelector(
    ({ auth }) => auth,
  );

  return { isAuth, isError, isLoaded, message };
};
