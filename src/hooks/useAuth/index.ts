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
      let accessToken;
      if (!refreshToken) {
        const { refresh_token, access_token } = await dispatch(
          getAuthThunk(),
        ).unwrap();
        accessToken = access_token;
        localStorage.setItem(
          process.env.REACT_APP_REFRESH_TOKEN_STORAGE_NAME as string,
          refresh_token,
        );
      } else {
        const { refresh_token, access_token } = await dispatch(
          getRefreshThunk(),
        ).unwrap();
        accessToken = access_token;
        localStorage.setItem(
          process.env.REACT_APP_REFRESH_TOKEN_STORAGE_NAME as string,
          refresh_token,
        );
      }

      localStorage.setItem(
        process.env.REACT_APP_ACCESS_TOKEN_STORAGE_NAME as string,
        accessToken,
      );
    };
    authLogic();
  }, [dispatch]);

  const { isAuth, isError, isLoaded, message } = useAppSelector(
    ({ auth }) => auth,
  );

  return { isAuth, isError, isLoaded, message };
};
