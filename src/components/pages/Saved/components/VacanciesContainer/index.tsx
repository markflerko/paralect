import { Vacancy } from 'components/common';
import { LoaderLayout } from 'components/layouts/LoaderLayout';
import { useSavedVacancies } from 'hooks/useSavedVacancies';
import { isSavedVacancy } from 'utils/isSavedVacancy';

export type VacanciesContainerProps = {
  page: number;
  saved: number[];
};

export const VacanciesContainer = ({
  page,
  saved,
}: VacanciesContainerProps) => {
  const { vacancies, isLoaded } = useSavedVacancies(page, saved);

  return (
    <LoaderLayout isLoaded={isLoaded}>
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
