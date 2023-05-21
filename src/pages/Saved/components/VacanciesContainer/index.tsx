import { Vacancy } from 'components/Vacancy/Vacancy';
import { vacanciesOnPage } from 'configuration';
import { useAppSelector } from 'hooks/reduxHooks';
import { LoaderLayout } from 'layouts/LoaderLayout';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'redux/store';
import { getSavedVacanciesThunk } from 'redux/thunks';

export type VacanciesContainerProps = {
  activePageAsIndex: number;
  saved: number[];
};

export const VacanciesContainer = ({
  activePageAsIndex,
  saved,
}: VacanciesContainerProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const { data: vacancies, isLoaded } = useAppSelector(({ saved }) => saved);

  useEffect(() => {
    const start = activePageAsIndex * vacanciesOnPage;
    const end = start + vacanciesOnPage;
    const activePageVacanciesIds = saved.slice(start, end);

    dispatch(getSavedVacanciesThunk(activePageVacanciesIds));
  }, [activePageAsIndex, dispatch, saved]);

  return (
    <LoaderLayout loaded={isLoaded}>
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
    </LoaderLayout>
  );
};
