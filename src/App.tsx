import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import { AppLayout, LoaderLayout } from 'layouts';
import { AuthLayout } from 'layouts/AuthLayout';
import { Details } from 'pages/Details';
import { Saved } from 'pages/Saved';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getAuthThunk, getRefreshThunk } from 'redux/thunks';
import { NotFound } from './pages/NotFound';
import { Search } from './pages/Search';

export default function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const authLogic = async () => {
      const refreshToken = localStorage.getItem('refreshToken');
      if (!refreshToken) {
        const { refresh_token } = await dispatch(getAuthThunk()).unwrap();
        localStorage.setItem('refreshToken', refresh_token);
      } else {
        const { refresh_token } = await dispatch(getRefreshThunk()).unwrap();
        localStorage.setItem('refreshToken', refresh_token);
      }
    };
    authLogic();
  }, [dispatch]);

  const { isAuth, isError, isLoaded, message } = useAppSelector(
    ({ auth }) => auth,
  );

  return (
    <LoaderLayout isLoaded={isLoaded}>
      <AuthLayout isAuth={isAuth} isError={isError} message={message}>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="search" element={<Search />} />
            <Route path="details/:id" element={<Details />} />
            <Route path="saved" element={<Saved />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AuthLayout>
    </LoaderLayout>
  );
}
