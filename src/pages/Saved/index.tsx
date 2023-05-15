import { Pagination } from '@mantine/core';
import { vacanciesOnPage } from 'configuration';
import { VacanciesContainer } from 'pages/Saved/components/VacanciesContainer';
import { useEffect, useState } from 'react';
import styles from './Saved.module.scss';
import { getSavedVacancyIds } from '../../utils/getSavedVacancyIds';

export function Saved() {
  const savedVacancyIds = getSavedVacancyIds();
  const [activePage, setPage] = useState(1);
  const [total, setTotal] = useState(5);

  useEffect(() => {
    const total = Math.ceil(savedVacancyIds.length / vacanciesOnPage);
    setTotal(total);
  }, []);

  return (
    <div className={styles.Container}>
      <VacanciesContainer page={activePage - 1} />
      <Pagination
        value={activePage}
        onChange={setPage}
        total={total}
        className={styles.PaginationContainer}
      />
    </div>
  );
}
