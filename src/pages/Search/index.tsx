import { Pagination } from '@mantine/core';
import axios from 'axios';
import FilterTab from 'components/FilterTab/FilterTab';
import { useEffect, useState } from 'react';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { Vacancy } from '../../components/Vacancy/Vacancy';
import styles from './Search.module.scss';

export function Search() {
  const [vacancies, setVacancies] = useState<Record<string, any>[]>([]);
  const [saved, setSaved] = useState([]);
  const [activePage, setPage] = useState(1);

  useEffect(() => {
    axios
      .get('https://startup-summer-2023-proxy.onrender.com/2.0/vacancies/', {
        headers: {
          'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
          'X-Api-App-Id':
            'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
        },
      })
      .then((res) => {
        setVacancies(res.data.objects.splice(0, 4));
      })
      .catch((error) => {
        console.error(error);
      });

    const saved = JSON.parse(localStorage.getItem('saved') || '[]');
    setSaved(saved);
  }, []);

  return (
    <div className={styles.Container}>
      <div className={styles.FirstColumnContainer}>
        <FilterTab />
      </div>
      <div className={styles.FirstColumnContainer}>
        <SearchBar />
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
