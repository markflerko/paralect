import { Pagination } from '@mantine/core';
import { useAppSelector } from 'hooks/reduxHooks';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'redux/store';
import { getSavedVacanciesThunk } from 'redux/thunks';
import { Vacancy } from '../../components/Vacancy/Vacancy';
import styles from './Saved.module.scss';

export function Saved() {
  const dispatch = useDispatch<AppDispatch>();
  const [saved, setSaved] = useState<number[]>([]);
  const [activePage, setPage] = useState(1);

  const { data: vacancies, isLoaded } = useAppSelector(({ saved }) => saved);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('saved') || '[]') as number[];
    setSaved(saved);

    dispatch(getSavedVacanciesThunk(saved));
  }, [dispatch]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.Container}>
      {vacancies.map((vacancy) => (
        <Vacancy
          currency={vacancy?.currency}
          paymentAmountFrom={vacancy?.paymentAmountFrom}
          paymentAmountTo={vacancy?.paymentAmountTo}
          profession={vacancy?.profession}
          town={vacancy?.town}
          typeOfWork={vacancy?.typeOfWork}
          key={vacancy?.id}
          id={vacancy?.id}
          isSaved={saved.some((item) => item === vacancy?.id)}
        />
      ))}
      <Pagination value={activePage} onChange={setPage} total={3}  className={styles.PaginationContainer}/>
    </div>
  );
}
