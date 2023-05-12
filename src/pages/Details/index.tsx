import { Paper } from '@mantine/core';
import { useAppSelector } from 'hooks/reduxHooks';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AppDispatch } from 'redux/store';
import getVacancyByIdThunk from 'redux/thunks/getVacancyThunk';
import { Vacancy } from '../../components/Vacancy/Vacancy';
import styles from './Details.module.scss';

export function Details() {
  const dispatch = useDispatch<AppDispatch>();

  const [saved, setSaved] = useState<number[]>([]);
  const { id } = useParams<{ id: string }>();

  const { data: vacancy, isLoaded } = useAppSelector(({ vacancy }) => vacancy);

  useEffect(() => {
    async function getVacancies() {
      const saved = JSON.parse(
        localStorage.getItem('saved') || '[]'
      ) as number[];
      setSaved(saved);

      dispatch(getVacancyByIdThunk(id ?? ''));
    }

    getVacancies();
  }, [id, dispatch]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.Container}>
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
  );
}
