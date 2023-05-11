import { Pagination } from '@mantine/core';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Vacancy } from '../../components/Vacancy/Vacancy';
import styles from './Saved.module.scss';

export function Saved() {
  const [vacancies, setVacancies] = useState<Record<string, any>[]>([]);
  const [saved, setSaved] = useState([]);
  const [activePage, setPage] = useState(1);

  useEffect(() => {
    async function getVacancies() {
      const saved = JSON.parse(
        localStorage.getItem('saved') || '[]'
      ) as number[];

      let receivedVacancies = [];

      const getVacancy = (id: number) =>
        axios
          .get(
            `https://startup-summer-2023-proxy.onrender.com/2.0/vacancies/${id}`,
            {
              headers: {
                'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
                'X-Api-App-Id':
                  'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
              },
            }
          )
          .then((res) => {
            return res.data;
          })
          .catch((error) => {
            console.error(error);
          });

      const promises = saved.map((id) => getVacancy(id));

      receivedVacancies = await Promise.all(promises);

      setVacancies(receivedVacancies);
    }

    getVacancies();
  }, []);

  return (
    <div className={styles.Container}>
      <div className={styles.FirstColumnContainer}>
        {vacancies.map((vacancy) => (
          <Vacancy
            currency={vacancy?.currency}
            paymentAmountFrom={vacancy?.payment_from}
            paymentAmountTo={vacancy?.payment_to}
            profession={vacancy?.profession}
            town={vacancy?.town?.title}
            typeOfWork={vacancy?.type_of_work?.title}
            key={vacancy?.id}
            id={vacancy?.id}
            isSaved={saved.some((item) => item === vacancy?.id)}
          />
        ))}
        <Pagination value={activePage} onChange={setPage} total={3} />
      </div>
    </div>
  );
}
