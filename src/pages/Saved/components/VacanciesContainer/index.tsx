import { Vacancy } from 'components/Vacancy/Vacancy';
import { vacanciesOnPage } from 'configuration';
import { useAppSelector } from 'hooks/reduxHooks';
import { LoaderLayout } from 'layouts/LoaderLayout';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'redux/store';
import { getSavedVacanciesThunk } from 'redux/thunks';
import { isSavedVacancy } from 'utils/isSavedVacancy';

export type VacanciesContainerProps = {
  page: number;
  saved: number[];
};

export const VacanciesContainer = ({
  page,
  saved,
}: VacanciesContainerProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const { data: vacancies, isLoaded } = useAppSelector(({ saved }) => saved);

  useEffect(() => {
    const start = page * vacanciesOnPage;
    const end = start + vacanciesOnPage;
    const activePageVacanciesIds = saved.slice(start, end);

    dispatch(getSavedVacanciesThunk(activePageVacanciesIds));
  }, [page, dispatch, saved]);

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
          isSaved={isSavedVacancy(vacancy.id)}
        />
      ))}
    </LoaderLayout>
  );
};
