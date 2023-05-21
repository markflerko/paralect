import { useEffect } from 'react';
import { getVacanciesThunk } from 'redux/thunks';
import { useAppDispatch, useAppSelector } from '../reduxHooks';

export const useSearchVacancies = (page: number) => {
  const dispatch = useAppDispatch();
  const { data: vacancies, isLoaded } = useAppSelector(
    ({ vacancies }) => vacancies,
  );

  useEffect(() => {
    dispatch(getVacanciesThunk({ page }));
  }, [dispatch, page]);

  return { vacancies, isLoaded };
};
