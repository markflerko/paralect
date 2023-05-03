import axios from 'axios';
import { lazy, useEffect, useState } from 'react';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { Vacancy } from '../../components/Vacancy/Vacancy';
import styles from './Search.module.scss';

const FilterTab = lazy(() => import('components/FilterTab/FilterTab'));

export function Search() {
  const [vacancies, setVacancies] = useState<Record<string, any>[]>([]);

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
        setVacancies(res.data.objects);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className={styles.Container}>
      <div className={styles.FilterTabContainer}>
        <FilterTab />
      </div>
      <div className={styles.SearchBarAndVacanciesContainer}>
        <SearchBar />
        {vacancies.map((vacancy) => (
          <Vacancy
            currency={vacancy?.currency}
            payment_amount_from={vacancy?.payment_from}
            payment_amount_to={vacancy?.payment_to}
            profession={vacancy?.profession}
            town={vacancy?.town?.title}
            typeOfWork={vacancy?.type_of_work?.title}
            key={vacancy?.id}
          />
        ))}
      </div>
    </div>
  );
}
