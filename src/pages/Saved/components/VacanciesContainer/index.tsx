import { useEffect } from 'react';
import { Vacancy } from 'components/Vacancy/Vacancy';
import { vacanciesOnPage } from 'configuration';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import { getSavedVacanciesThunk } from 'redux/thunks';
import { getSavedVacancyIds } from 'utils/getSavedVacancyIds';
import { LoaderLayout } from 'layouts';

export type VacanciesContainerProps = {
  page: number;
};

export const VacanciesContainer = ({ page }: VacanciesContainerProps) => {
  const savedVacancyIds = getSavedVacancyIds();
  const dispatch = useAppDispatch();

  const { data: vacancies, isLoaded } = useAppSelector(({ saved }) => saved);

  useEffect(() => {
    const start = page * vacanciesOnPage;
    const end = start + vacanciesOnPage;
    const activePageVacanciesIds = savedVacancyIds.slice(start, end);

    dispatch(getSavedVacanciesThunk(activePageVacanciesIds));
  }, [page, dispatch, savedVacancyIds]);

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
          isSaved={savedVacancyIds.some((item) => item === vacancy.id)}
        />
      ))}
    </LoaderLayout>
  );
};
