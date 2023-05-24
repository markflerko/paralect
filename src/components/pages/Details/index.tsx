import { Paper } from '@mantine/core';
import { Vacancy } from 'components/common';
import { LoaderLayout } from 'components/layouts/LoaderLayout';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getVacancyByIdThunk } from 'redux/thunks';
import { isSavedVacancy } from 'utils/isSavedVacancy';
import styles from './Details.module.scss';

export function Details() {
  const dispatch = useAppDispatch();

  const { id } = useParams<{ id: string }>();

  const { data: vacancy, isLoaded } = useAppSelector(({ vacancy }) => vacancy);

  useEffect(() => {
    dispatch(getVacancyByIdThunk(id ?? ''));
  }, [id, dispatch]);

  return (
    <LoaderLayout isLoaded={isLoaded}>
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
          dangerouslySetInnerHTML={{ __html: vacancy?.vacancyRichText || '' }}
        />
      </div>
    </LoaderLayout>
  );
}
