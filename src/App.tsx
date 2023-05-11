import { AppShell } from '@mantine/core';
import { Outlet, Route, Routes } from 'react-router-dom';
import { CustomHeader } from './components/Header';
import { NotFound } from './pages/NotFound';
import { Search } from './pages/Search';
import { Saved } from 'pages/Saved';
import { Details } from 'pages/Details';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="search" element={<Search />} />
          <Route path="details/:id" element={<Details />} />
          <Route path="saved" element={<Saved />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <AppShell padding="md" header={CustomHeader()}>
        <Outlet />
      </AppShell>
    </div>
  );
}