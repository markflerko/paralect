import { Vacancy } from 'components/Vacancy/Vacancy';
import { vacanciesOnPage } from 'configuration';
import { useAppSelector } from 'hooks/reduxHooks';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'redux/store';
import { getSavedVacanciesThunk } from 'redux/thunks';

export type VacanciesContainerProps = {
  activePageAsIndex: number;
  saved: number[];
};

export const VacanciesContainer: React.FC<VacanciesContainerProps> = ({
  activePageAsIndex,
  saved,
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const { data: vacancies, isLoaded } = useAppSelector(({ saved }) => saved);

  useEffect(() => {
    const start = activePageAsIndex * vacanciesOnPage;
    const end = start + vacanciesOnPage;
    const activePageVacanciesIds = saved.slice(start, end);

    dispatch(getSavedVacanciesThunk(activePageVacanciesIds));
  }, [activePageAsIndex, dispatch, saved]);

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
