import { Pagination } from '@mantine/core';
import FilterTab from 'components/FilterTab/FilterTab';
import { useAppSelector } from 'hooks/reduxHooks';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'redux/store';
import { getVacanciesThunk } from 'redux/thunks';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { Vacancy } from '../../components/Vacancy/Vacancy';
import styles from './Search.module.scss';

export function Search() {
  const dispatch = useDispatch<AppDispatch>();

  const [saved, setSaved] = useState([]);
  const [activePage, setPage] = useState(1);

  const { data: vacancies, isLoaded } = useAppSelector(
    ({ vacancies }) => vacancies
  );

  useEffect(() => {
    dispatch(getVacanciesThunk({ page: activePage - 1 }));

    const saved = JSON.parse(localStorage.getItem('saved') || '[]');
    setSaved(saved);
  }, [dispatch, activePage]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.Container}>
      <div className={styles.FirstColumnContainer}>
        <FilterTab />
      </div>
      <div className={styles.FirstColumnContainer}>
        <SearchBar />
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
