import { Vacancy } from 'components/Vacancy/Vacancy';
import { useAppSelector } from 'hooks/reduxHooks';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'redux/store';
import { getVacanciesThunk } from 'redux/thunks';

export type VacanciesContainerProps = {
  activePage: number;
  saved: number[];
};

export const VacanciesContainer: React.FC<VacanciesContainerProps> = ({
  activePage,
  saved,
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const { data: vacancies, isLoaded } = useAppSelector(
    ({ vacancies }) => vacancies
  );

  useEffect(() => {
    dispatch(getVacanciesThunk({ page: activePage - 1 }));
  }, [dispatch, activePage]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

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
          isSaved={saved.some((item) => item === vacancy?.id)}
        />
      ))}
    </>
  );
};
