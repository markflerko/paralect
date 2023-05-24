import { AppLayout, AuthLayout, LoaderLayout } from 'components/layouts';
import { Details, NotFound, Saved, Search } from 'components/pages';
import { useAuth } from 'hooks/useAuth';
import { Route, Routes, useNavigate } from 'react-router-dom';

export default function App() {
  const navigate = useNavigate();

  const { isAuth, isError, isLoaded, message } = useAuth();

  if (isLoaded && isAuth && window.location.pathname === '/') {
    navigate('/search');
  }

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
