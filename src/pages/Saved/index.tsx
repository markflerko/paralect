import { Pagination } from '@mantine/core';
import { vacanciesOnPage } from 'configuration';
import { VacanciesContainer } from 'pages/Saved/components/VacanciesContainer';
import { useEffect, useState } from 'react';
import styles from './Saved.module.scss';

export function Saved() {
  const [saved, setSaved] = useState<number[]>([]);
  const [activePage, setPage] = useState(1);
  const [total, setTotal] = useState(5);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('saved') || '[]') as number[];
    setSaved(saved);

    const total = Math.ceil(saved.length / vacanciesOnPage);
    setTotal(total);
  }, []);

  return (
    <div className={styles.Container}>
      <VacanciesContainer activePageAsIndex={activePage - 1} saved={saved} />
      <Pagination
        value={activePage}
        onChange={setPage}
        total={total}
        className={styles.PaginationContainer}
      />
    </div>
  );
}
