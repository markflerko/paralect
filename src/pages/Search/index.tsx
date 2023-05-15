import { useState } from 'react';
import { Pagination } from '@mantine/core';
import FilterTab from 'components/FilterTab/FilterTab';
import { VacanciesContainer } from 'pages/Search/components/VacanciesContainer';
import { SearchBar } from 'components/SearchBar/SearchBar';
import styles from './Search.module.scss';

export function Search() {
  const [activePage, setActivePage] = useState(1);

  return (
    <div className={styles.Container}>
      <div className={styles.FirstColumnContainer}>
        <FilterTab />
      </div>
      <div className={styles.FirstColumnContainer}>
        <SearchBar />
        <VacanciesContainer page={activePage - 1} />
        <Pagination
          value={activePage}
          onChange={setActivePage}
          total={120}
          className={styles.PaginationContainer}
        />
      </div>
    </div>
  );
}
