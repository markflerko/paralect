import { AppShell } from '@mantine/core';
import { Outlet, Route, Routes } from 'react-router-dom';
import { CustomHeader } from './components/Header';
import { Search } from './components/Search';
import { NotFound } from './components/NotFound';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="search" element={<Search />} />
          <Route path="vacancy" element={<Vacancy />} />
          <Route path="favorites" element={<Favorites />} />
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

function Vacancy() {
  return (
    <div>
      <h2>Vacancy</h2>
    </div>
  );
}

function Favorites() {
  return (
    <div>
      <h2>Favorites</h2>
    </div>
  );
}
