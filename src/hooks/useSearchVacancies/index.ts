import { useEffect } from 'react';
import { getVacanciesThunk } from 'redux/thunks';
import { useAppDispatch, useAppSelector } from '../reduxHooks';

export const useSearchVacancies = (page: number) => {
  const dispatch = useAppDispatch();
  const { data: vacancies, isLoaded } = useAppSelector(
    ({ vacancies }) => vacancies,
  );

  const filters = useAppSelector(({ filters }) => filters);

  useEffect(() => {
    dispatch(getVacanciesThunk({ ...filters, page }));
  }, [dispatch, page, filters]);

  return { vacancies, isLoaded };
};
