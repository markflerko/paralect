import { Pagination } from '@mantine/core';
import { vacanciesOnPage } from 'configuration';
import { useEffect, useState } from 'react';
import { getSavedVacancyIds } from 'utils/getSavedVacancyIds';
import styles from './Saved.module.scss';
import { VacanciesContainer } from 'components/pages/Saved/components/VacanciesContainer';

export function Saved() {
  const savedVacancyIds = getSavedVacancyIds();
  const [activePage, setPage] = useState(1);
  const [total, setTotal] = useState(5);

  useEffect(() => {
    const total = Math.ceil(savedVacancyIds.length / vacanciesOnPage);
    setTotal(total);
  }, [savedVacancyIds.length]);

  return (
    <div className={styles.Container}>
      <VacanciesContainer page={activePage - 1} saved={savedVacancyIds} />
      <Pagination
        value={activePage}
        onChange={setPage}
        total={total}
        className={styles.PaginationContainer}
      />
    </div>
  );
}
