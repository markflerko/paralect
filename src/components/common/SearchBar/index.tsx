import { Button, Input } from '@mantine/core';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import { useState } from 'react';
import { setFilters } from 'redux/handlers/filters';
import { getVacanciesThunk } from 'redux/thunks';
import styles from './SearchBar.module.scss';
import { SearchIcon } from './SearchIcon';

export function SearchBar() {
  const dispatch = useAppDispatch();

  const [query, setQuery] = useState<string>('');

  const filters = useAppSelector(({ filters }) => filters);

  const handleSearch = () => {
    dispatch(setFilters({ keyword: query }));
    dispatch(getVacanciesThunk({ ...filters, keyword: query }));
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.currentTarget.value);
  };

  return (
    <div className={styles.SearchBar}>
      <Input
        data-elem="search-input"
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
            data-elem="search-button"
          >
            Поиск
          </Button>
        }
      />
    </div>
  );
}
