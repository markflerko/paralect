import { Paper } from '@mantine/core';
import { useAppSelector } from 'hooks/reduxHooks';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AppDispatch } from 'redux/store';
import { getVacancyByIdThunk } from 'redux/thunks';
import { isSavedVacancy } from '../../utils/isSavedVacancy';
import { Vacancy } from '../../components/Vacancy/Vacancy';
import styles from './Details.module.scss';

export function Details() {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams<{ id: string }>();

  const { data: vacancy, isLoaded } = useAppSelector(({ vacancy }) => vacancy);

  useEffect(() => {
    dispatch(getVacancyByIdThunk(id ?? ''));
  }, [id, dispatch]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.Container}>
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
        displayType="details"
      />
      <Paper
        shadow="xs"
        radius="lg"
        p="xl"
        className={styles.DescriptionContainer}
        dangerouslySetInnerHTML={{ __html: vacancy.vacancyRichText || '' }}
      />
    </div>
  );
}
