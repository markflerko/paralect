import { Button, Input } from '@mantine/core';
import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'redux/store';
import { getVacanciesThunk } from 'redux/thunks';
import styles from './SearchBar.module.scss';
import { SearchIcon } from './SearchIcon';

export type SearchBarProps = {};

export const SearchBar: FC<SearchBarProps> = ({}) => {
  const dispatch = useDispatch<AppDispatch>();

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
