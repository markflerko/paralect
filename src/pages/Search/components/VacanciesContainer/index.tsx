import { Vacancy } from 'components/Vacancy/Vacancy';
import { isSavedVacancy } from 'utils/isSavedVacancy';
import { LoaderLayout } from 'layouts';
import { useVacancies } from '../../../../hooks/useVacancies';

export type VacanciesContainerProps = {
  page: number;
};

export const VacanciesContainer = ({ page }: VacanciesContainerProps) => {
  const { vacancies, loaded } = useVacancies(page);

  return (
    <LoaderLayout loaded={loaded}>
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
