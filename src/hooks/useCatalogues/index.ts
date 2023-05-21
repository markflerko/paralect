import { useEffect } from 'react';
import { getCataloguesThunk } from 'redux/thunks';
import { useAppDispatch, useAppSelector } from '../reduxHooks';

export const useCatalogues = (industry: string) => {
  const dispatch = useAppDispatch();
  const { data: industries, isLoaded } = useAppSelector(
    ({ catalogues }) => catalogues,
  );

  useEffect(() => {
    dispatch(getCataloguesThunk());
  }, [dispatch]);

  const industriesTitles = industries.map(({ title }) => title);
  const { key } = industries.find((item) => item.title === industry) ?? {};

  return { industriesTitles, key, isLoaded };
};
