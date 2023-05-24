import { Vacancy } from 'components/common';
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
    <>
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
          isLoaded={isLoaded}
          isSaved={isSavedVacancy(vacancy.id)}
        />
      ))}
    </>
  );
};
