import { AppLayout } from 'layouts';
import { Details } from 'pages/Details';
import { Saved } from 'pages/Saved';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from './pages/NotFound';
import { Search } from './pages/Search';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="search" element={<Search />} />
          <Route path="details/:id" element={<Details />} />
          <Route path="saved" element={<Saved />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}
