import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './Search.module.scss';

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
      <ul>
        {vacancies.map((vacancy) => (
          <li key={vacancy?.id}>
            <h3>{vacancy?.profession}</h3>
            <p>{vacancy?.firm_name}</p>
            <p>{vacancy?.town?.title}</p>
            <p>{vacancy?.catalogues[0]?.title}</p>
            <p>{vacancy?.type_of_work?.title}</p>
            <p>
              {vacancy?.payment_from} - {vacancy?.payment_to}{' '}
              {vacancy?.currency}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
