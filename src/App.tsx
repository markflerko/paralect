import { useAuth } from 'hooks/useAuth';
import { AppLayout, LoaderLayout } from 'layouts';
import { AuthLayout } from 'layouts/AuthLayout';
import { Details } from 'pages/Details';
import { Saved } from 'pages/Saved';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from './pages/NotFound';
import { Search } from './pages/Search';

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
