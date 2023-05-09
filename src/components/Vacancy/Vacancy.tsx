import { Paper, Text, Title } from '@mantine/core';
import Dot from 'assets/images/Dot.svg';
import Location from 'assets/images/Location.svg';
import Star from 'assets/images/Star.svg';
import { FC } from 'react';
import styles from './Vacancy.module.scss';

export type VacancyProps = {
  profession: string;
  town: string;
  typeOfWork: string;
  paymentAmountFrom: number;
  paymentAmountTo: number;
  currency: string;
  id: number;
};

export const Vacancy: FC<VacancyProps> = ({
  profession,
  town,
  typeOfWork,
  paymentAmountFrom,
  paymentAmountTo,
  currency,
  id,
}) => {
  const handleStarClick = () => {
    let saved = JSON.parse(localStorage.getItem('saved') || '[]') as number[];
    const index = saved.indexOf(id);

    //if there is item - remove, no - delete
    if (index === -1) {
      saved = [...saved, id];
    } else {
      saved.splice(index, 1);
    }

    localStorage.setItem('saved', JSON.stringify(saved));
  };

  return (
    <Paper
      shadow="xs"
      radius="lg"
      p="lg"
      m="sm"
      className={styles.VacancyContainer}
    >
      <div className={styles.FirstRowContainer}>
        <Title order={3} color="#5E96FC" className={styles.Title}>
          {profession}
        </Title>
        <div className={styles.Star} onClick={handleStarClick}>
          <img src={Star} alt="Star" />
        </div>
      </div>
      <div className={styles.SecondRowContainer}>
        <Text fw={700}>
          з/п {paymentAmountFrom} - {paymentAmountTo} {currency}
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
