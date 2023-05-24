import { AppLayout, AuthLayout, LoaderLayout } from 'components/layouts';
import { Details, NotFound, Saved, Search } from 'components/pages';
import { useAuth } from 'hooks/useAuth';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  const { isAuth, isError, isLoaded, message } = useAuth();

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
