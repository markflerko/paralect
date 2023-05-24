import { Vacancy } from 'components/common';
import { useSearchVacancies } from 'hooks/useSearchVacancies';

export type VacanciesContainerProps = {
  activePage: number;
  saved: number[];
};

export const VacanciesContainer = ({
  activePage,
  saved,
}: VacanciesContainerProps) => {
  const { vacancies, isLoaded } = useSearchVacancies(activePage);

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
          isSaved={saved.some((item) => item === vacancy?.id)}
        />
      ))}
    </>
  );
};
