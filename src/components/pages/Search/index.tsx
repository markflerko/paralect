import { Button, Pagination } from '@mantine/core';
import FilterTab from 'components/common/FilterTab/FilterTab';
import { SearchBar } from 'components/common/SearchBar/SearchBar';
import { VacanciesContainer } from 'components/pages/Search/components/VacanciesContainer';
import { useState } from 'react';
import { getSavedVacancyIds } from 'utils/getSavedVacancyIds';
import styles from './Search.module.scss';

export function Search() {
  const savedVacancyIds = getSavedVacancyIds();
  const [activePage, setPage] = useState(1);
  const [showFilterMobile, setShowFilterMobile] = useState(false);

  const handleClickFilterBtn = () => {
    setShowFilterMobile(!showFilterMobile);
  };

  return (
    <div className={styles.Container}>
      <div className={styles.FirstColumnContainer}>
        <FilterTab />
      </div>
      <div className={styles.SecondColumnContainer}>
        <div className={styles.searchBarAndFilterBtn}>
          <SearchBar />
          <Button
            className={styles.button}
            radius={'md'}
            onClick={handleClickFilterBtn}
          >
            Ф
          </Button>
        </div>
        {showFilterMobile && (
          <div className={styles.filterTabMobileContainer}>
            <FilterTab />
          </div>
        )}
        <VacanciesContainer activePage={activePage} saved={savedVacancyIds} />
        <Pagination
          value={activePage}
          onChange={setPage}
          total={120}
          siblings={0}
          className={styles.PaginationContainer}
        />
      </div>
    </div>
  );
}
