import { Pagination } from '@mantine/core';
import FilterTab from 'components/FilterTab/FilterTab';
import { VacanciesContainer } from 'pages/Search/components/VacanciesContainer';
import { useState } from 'react';
import { getSavedVacancyIds } from 'utils/getSavedVacancyIds';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import styles from './Search.module.scss';

export function Search() {
  const savedVacancyIds = getSavedVacancyIds();
  const [activePage, setPage] = useState(1);

  return (
    <div className={styles.Container}>
      <div className={styles.FirstColumnContainer}>
        <FilterTab />
      </div>
      <div className={styles.FirstColumnContainer}>
        <SearchBar />
        <VacanciesContainer activePage={activePage} saved={savedVacancyIds} />
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
