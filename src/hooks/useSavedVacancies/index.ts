import { vacanciesOnPage } from 'configuration';
import { useEffect } from 'react';
import { getSavedVacanciesThunk } from 'redux/thunks';
import { useAppDispatch, useAppSelector } from '../reduxHooks';

export const useSavedVacancies = (page: number, saved: number[]) => {
  const dispatch = useAppDispatch();

  const { data: vacancies, isLoaded } = useAppSelector(({ saved }) => saved);

  useEffect(() => {
    const start = page * vacanciesOnPage;
    const end = start + vacanciesOnPage;
    const activePageVacanciesIds = saved.slice(start, end);

    dispatch(getSavedVacanciesThunk(activePageVacanciesIds));
  }, [page, dispatch, saved]);

  return { vacancies, isLoaded };
};
