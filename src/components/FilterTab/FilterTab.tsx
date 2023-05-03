import { Paper, Text, Title } from '@mantine/core';
import Cancel from 'assets/images/Cancel.svg';
import { FC } from 'react';
import styles from './FilterTab.module.scss';

export type FilterTabProps = {};

export const FilterTab: FC<FilterTabProps> = ({}) => {
  return (
    <Paper className={styles.Container} radius={"lg"} p={'lg'}>
      <div className={styles.FirstRowContainer}>
        <Title order={3}>Фильтры</Title>
        <div className={styles.CancelContainer}>
          <Text color="#ACADB9" fw={500} fz={'sm'}>Сбросить все</Text>
          <div className={styles.Cancel}>
            <img src={Cancel} alt="Cancel" />
          </div>
        </div>
      </div>
    </Paper>
  );
};
