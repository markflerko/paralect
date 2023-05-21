import { Button, Input } from '@mantine/core';
import { useAppDispatch } from 'hooks/reduxHooks';
import { useState } from 'react';
import { getVacanciesThunk } from 'redux/thunks';
import styles from './SearchBar.module.scss';
import { SearchIcon } from './SearchIcon';

export const SearchBar = () => {
  const dispatch = useAppDispatch();

  const [query, setQuery] = useState<string>('');

  const handleSearch = () => {
    dispatch(getVacanciesThunk({ keyword: query }));
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.currentTarget.value);
  };

  return (
    <div className={styles.SearchBar}>
      <Input
        icon={<SearchIcon />}
        placeholder="Введите название вакансии"
        value={query}
        onChange={handleOnChange}
        className={styles.Input}
        rightSection={
          <Button
            onClick={handleSearch}
            className={styles.Button}
            radius={'md'}
          >
            Поиск
          </Button>
        }
      />
    </div>
  );
};
