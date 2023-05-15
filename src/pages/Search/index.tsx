import { Pagination } from '@mantine/core';
import FilterTab from 'components/FilterTab/FilterTab';
import { VacanciesContainer } from 'pages/Search/components/VacanciesContainer';
import { useEffect, useState } from 'react';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import styles from './Search.module.scss';

export function Search() {
  const [saved, setSaved] = useState([]);
  const [activePage, setPage] = useState(1);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('saved') || '[]');
    setSaved(saved);
  }, []);

  return (
    <div className={styles.Container}>
      <div className={styles.FirstColumnContainer}>
        <FilterTab />
      </div>
      <div className={styles.FirstColumnContainer}>
        <SearchBar />
        <VacanciesContainer activePage={activePage} saved={saved} />
        <Pagination
          value={activePage}
          onChange={setPage}
          total={120}
          className={styles.PaginationContainer}
        />
      </div>
    </div>
  );
}
