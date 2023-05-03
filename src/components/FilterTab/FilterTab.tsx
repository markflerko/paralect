import { Button, NumberInput, Paper, Text, Title } from '@mantine/core';
import Cancel from 'assets/images/Cancel.svg';
import axios from 'axios';
import { Dropdown } from 'components/Dropdown/Dropdown';
import { FC, useEffect, useState } from 'react';
import styles from './FilterTab.module.scss';

export type FilterTabProps = {};

export const FilterTab: FC<FilterTabProps> = ({}) => {
  const [industries, setIndustries] = useState<string[]>([]);

  useEffect(() => {
    axios
      .get('https://startup-summer-2023-proxy.onrender.com/2.0/catalogues/', {
        headers: {
          'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
          'X-Api-App-Id':
            'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
        },
      })
      .then((res) => {
        const result = res.data.map((item: { title: string }) => item?.title);
        setIndustries(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleApply = () => {
    console.log('handleSearch');
  };

  return (
    <Paper className={styles.Container} radius={'lg'} p={'lg'}>
      <div className={styles.FirstRowContainer}>
        <Title order={3}>Фильтры</Title>
        <div className={styles.CancelContainer}>
          <Text color="#ACADB9" fw={500} fz={'sm'}>
            Сбросить все
          </Text>
          <div className={styles.Cancel}>
            <img src={Cancel} alt="Cancel" />
          </div>
        </div>
      </div>
      <div className={styles.IndustryContainer}>
        <Text fw={700} mb={'xs'}>
          Отрасль
        </Text>
        <Dropdown data={industries} />
      </div>
      <div className={styles.SalaryContainer}>
        <Text fw={700} mb={'xs'}>
          Оклад
        </Text>
        <NumberInput mb={'xs'} placeholder="От" />
        <NumberInput placeholder="До" />
      </div>
      <Button onClick={handleApply} className={styles.Button} radius={'md'}>
        Применить
      </Button>
    </Paper>
  );
};

export default FilterTab;
