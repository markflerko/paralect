import { Vacancy } from 'components/common/Vacancy/Vacancy';
import { LoaderLayout } from 'components/layouts/LoaderLayout';
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
          isSaved={saved.some((item) => item === vacancy?.id)}
        />
      ))}
    </LoaderLayout>
  );
};
