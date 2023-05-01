import { AppShell } from '@mantine/core';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import { CustomHeader } from './components/Header';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="search" element={<Search />} />
          <Route path="vacancy" element={<Vacancy />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="*" element={<NoMatch />} />
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

function Search() {
  return (
    <div>
      <h2>Search</h2>
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

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
