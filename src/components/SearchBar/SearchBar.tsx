import { Button, Input } from '@mantine/core';
import { FC, useState } from 'react';
import styles from './SearchBar.module.scss';
import { SearchIcon } from './SearchIcon';

export type SearchBarProps = {};

export const SearchBar: FC<SearchBarProps> = ({}) => {
  const [query, setQuery] = useState<string>('');

  const handleSearch = () => {
    console.log(query);
  };

  return (
    <div className={styles.SearchBar}>
      <Input
        icon={<SearchIcon />}
        placeholder="Введите название вакансии"
        value={query}
        onChange={(event) => setQuery(event.currentTarget.value)}
        className={styles.Input}
        rightSection={
          <Button onClick={handleSearch} className={styles.Button} radius={'md'}>
            Поиск
          </Button>
        }
      />
    </div>
  );
};
