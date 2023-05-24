import { Button, Paper, Text, Title } from '@mantine/core';
import Cancel from 'assets/images/Cancel.svg';
import { Dropdown, MonetaryInput } from 'components/common';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import { useState } from 'react';
import { setFilters } from 'redux/handlers/filters';
import { getVacanciesThunk } from 'redux/thunks';
import styles from './FilterTab.module.scss';

export type FilterTabProps = {
  industriesTitles: string[];
  industryKey: number | undefined;
  industry: string;
  setIndustry: (value: string) => void;
};

export function FilterTab({
  industriesTitles,
  industryKey,
  setIndustry,
  industry,
}: FilterTabProps) {
  const dispatch = useAppDispatch();

  const [paymentFrom, setPaymentFrom] = useState<number | ''>('');
  const [paymentTo, setPaymentTo] = useState<number | ''>('');

  const filters = useAppSelector(({ filters }) => filters);

  const handleApply = () => {
    dispatch(setFilters({ key: industryKey, paymentFrom, paymentTo }));
    dispatch(
      getVacanciesThunk({
        ...filters,
        key: industryKey,
        paymentFrom,
        paymentTo,
      }),
    );
  };

  const handleCancelClick = () => {
    setIndustry('');
    setPaymentFrom('');
    setPaymentTo('');
  };

  return (
    <Paper className={styles.Container} radius={'lg'} p={'lg'}>
      <div className={styles.FirstRowContainer}>
        <Title order={3}>Фильтры</Title>
        <div className={styles.CancelContainer} onClick={handleCancelClick}>
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
        <Dropdown
          data={industriesTitles}
          setIndustry={setIndustry}
          value={industry}
        />
      </div>
      <div className={styles.SalaryContainer}>
        <Text fw={700} mb={'xs'}>
          Оклад
        </Text>
        <div className={styles.PaymentFromContainer}>
          <MonetaryInput
            placeholder="От"
            setValue={setPaymentFrom}
            value={paymentFrom}
            dataElem="salary-from-input"
          />
        </div>
        <MonetaryInput
          placeholder="До"
          setValue={setPaymentTo}
          value={paymentTo}
          dataElem="salary-to-input"
        />
      </div>
      <Button
        onClick={handleApply}
        className={styles.Button}
        radius={'md'}
        data-elem="search-button"
      >
        Применить
      </Button>
    </Paper>
  );
}
