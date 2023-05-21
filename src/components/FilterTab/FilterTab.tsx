import { Button, Paper, Text, Title } from '@mantine/core';
import Cancel from 'assets/images/Cancel.svg';
import { Dropdown } from 'components/Dropdown/Dropdown';
import { MonetaryInput } from 'components/NumberInput/NumberInput';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import { LoaderLayout } from 'layouts/LoaderLayout';
import { useEffect, useState } from 'react';
import { getCataloguesThunk, getVacanciesThunk } from 'redux/thunks';
import styles from './FilterTab.module.scss';

export const FilterTab = () => {
  const dispatch = useAppDispatch();

  const [industry, setIndustry] = useState('');
  const [paymentFrom, setPaymentFrom] = useState<number | ''>("");
  const [paymentTo, setPaymentTo] = useState<number | ''>("");

  const { data: industries, isLoaded } = useAppSelector(
    ({ catalogues }) => catalogues,
  );

  const industriesTitles = industries.map(({ title }) => title);

  useEffect(() => {
    dispatch(getCataloguesThunk());
  }, [dispatch]);

  const handleApply = () => {
    const { key } = industries.find((item) => item.title === industry) ?? {};
    dispatch(getVacanciesThunk({ key, paymentFrom, paymentTo }));
  };

  const handleCancelClick = () => {
    setIndustry('');
    setPaymentFrom('');
    setPaymentTo('');
  };

  return (
    <LoaderLayout isLoaded={isLoaded}>
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
            />
          </div>
          <MonetaryInput
            placeholder="До"
            setValue={setPaymentTo}
            value={paymentTo}
          />
        </div>
        <Button onClick={handleApply} className={styles.Button} radius={'md'}>
          Применить
        </Button>
      </Paper>
    </LoaderLayout>
  );
};

export default FilterTab;
