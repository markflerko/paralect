import { Paper, Text, Title } from '@mantine/core';
import Dot from 'assets/images/Dot.svg';
import Location from 'assets/images/Location.svg';
import Star from 'assets/images/Star.svg';
import StarActive from 'assets/images/StarActive.svg';
import { FC, useState } from 'react';
import styles from './Vacancy.module.scss';

export type VacancyProps = {
  profession: string;
  town: string;
  typeOfWork: string;
  paymentAmountFrom: number;
  paymentAmountTo: number;
  currency: string;
  id: number;
  isSaved: boolean;
  displayType?: 'details' | 'list';
};

export const Vacancy: FC<VacancyProps> = ({
  profession,
  town,
  typeOfWork,
  paymentAmountFrom,
  paymentAmountTo,
  currency,
  id,
  isSaved,
  displayType = 'list',
}) => {
  const [isStarActive, setIsStarActive] = useState(isSaved ?? false);

  const titleColor = displayType === 'list' ? '#5E96FC' : '#232134';
  const titleOrder = displayType === 'list' ? 3 : 1;
  const fz = displayType === 'list' ? 'md' : 'xl';

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

    setIsStarActive(!isStarActive);
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
        <Title order={titleOrder} color={titleColor} className={styles.Title}>
          {profession}
        </Title>
        <div className={styles.Star} onClick={handleStarClick}>
          {isStarActive ? (
            <img src={StarActive} alt="StarActive" />
          ) : (
            <img src={Star} alt="Star" />
          )}
        </div>
      </div>
      <div className={styles.SecondRowContainer}>
        <Text fw={700} fz={fz}>
          з/п {paymentAmountFrom} - {paymentAmountTo} {currency}
        </Text>
        <div>
          <img src={Dot} alt="Dot" />
        </div>
        <Text fz={fz}>{typeOfWork}</Text>
      </div>
      <div className={styles.ThirdRowContainer}>
        <div className={styles.Location}>
          <img src={Location} alt="Location" />
        </div>
        <Text fz={fz}>{town}</Text>
      </div>
    </Paper>
  );
};
