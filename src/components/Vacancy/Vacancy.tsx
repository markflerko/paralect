import { Paper, Text, Title } from '@mantine/core';
import { FC } from 'react';
import Dot from 'assets/images/Dot.svg';
import Location from 'assets/images/Location.svg';
import Star from 'assets/images/Star.svg';
import styles from './Vacancy.module.scss';

export type VacancyProps = {
  profession: string;
  town: string;
  typeOfWork: string;
  payment_amount_from: number;
  payment_amount_to: number;
  currency: string;
};

export const Vacancy: FC<VacancyProps> = ({
  profession,
  town,
  typeOfWork,
  payment_amount_from,
  payment_amount_to,
  currency,
}) => {
  return (
    <Paper shadow="xs" radius="lg" p="lg" m="sm">
      <div className={styles.FirstRowContainer}>
        <Title order={3} color="#5E96FC" className={styles.Title}>
          {profession}
        </Title>
        <div className={styles.Star}>
          <img src={Star} alt="Star" />
        </div>
      </div>
      <div className={styles.SecondRowContainer}>
        <Text fw={700}>
          з/п {payment_amount_from} - {payment_amount_to} {currency}
        </Text>
        <div>
          <img src={Dot} alt="Dot" />
        </div>
        <Text>{typeOfWork}</Text>
      </div>
      <div className={styles.ThirdRowContainer}>
        <div className={styles.Location}>
          <img src={Location} alt="Location" />
        </div>
        <Text>{town}</Text>
      </div>
    </Paper>
  );
};
