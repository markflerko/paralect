import { useAuth } from 'hooks/useAuth';
import { AppLayout, LoaderLayout } from 'components/layouts';
import { AuthLayout } from 'components/layouts/AuthLayout';
import { Route, Routes } from 'react-router-dom';
import { Search } from 'components/pages/Search';
import { Details } from 'components/pages/Details';
import { Saved } from 'components/pages/Saved';
import { NotFound } from 'components/pages/NotFound';

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
