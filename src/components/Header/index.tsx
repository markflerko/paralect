import { Header, Text } from '@mantine/core';
import styles from './Header.module.scss';
import logo from './logo.svg';

export const CustomHeader = () => {
  return (
    <Header height={84} className={styles.CustomHeader}>
      <div className={styles.Logo}>
        <img src={logo} alt="Logo" />
      </div>
      <div className={styles.Menu}>
        <Text>Поиск вакансий</Text>
        <Text>Избранное</Text>
      </div>
    </Header>
  );
};
