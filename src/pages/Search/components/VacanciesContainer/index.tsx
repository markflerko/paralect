import { Vacancy } from 'components/Vacancy/Vacancy';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import { useEffect } from 'react';
import { getVacanciesThunk } from 'redux/thunks';
import { isSavedVacancy } from 'utils/isSavedVacancy';
import { LoaderLayout } from 'layouts';

export type VacanciesContainerProps = {
  page: number;
};

export const VacanciesContainer = ({ page }: VacanciesContainerProps) => {
  const dispatch = useAppDispatch();

  const { data: vacancies, isLoaded } = useAppSelector(
    ({ vacancies }) => vacancies,
  );

  useEffect(() => {
    dispatch(getVacanciesThunk({ page }));
  }, [dispatch, page]);

  return (
    <LoaderLayout loaded={isLoaded}>
      {vacancies.map((vacancy) => (
        <Vacancy
          currency={vacancy.currency}
          paymentAmountFrom={vacancy.paymentAmountFrom}
          paymentAmountTo={vacancy.paymentAmountTo}
          profession={vacancy.profession}
          town={vacancy.town}
          typeOfWork={vacancy.typeOfWork}
          key={vacancy.id}
          id={vacancy.id}
          isSaved={isSavedVacancy(vacancy.id)}
        />
      ))}
    </LoaderLayout>
  );
};
