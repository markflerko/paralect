import { Button, NumberInput, Paper, Text, Title } from '@mantine/core';
import Cancel from 'assets/images/Cancel.svg';
import { Dropdown } from 'components/Dropdown/Dropdown';
import { useAppSelector } from 'hooks/reduxHooks';
import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'redux/store';
import { getCataloguesThunk } from 'redux/thunks';
import styles from './FilterTab.module.scss';

export type FilterTabProps = {};

export const FilterTab: FC<FilterTabProps> = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { data: industries, isLoaded } = useAppSelector(
    ({ catalogues }) => catalogues
  );

  useEffect(() => {
    dispatch(getCataloguesThunk());
  }, [dispatch]);

  const handleApply = () => {
    console.log('handleSearch');
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

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
