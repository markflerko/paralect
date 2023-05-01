import { Header, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from './logo.svg';

export const CustomHeader = () => {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate('/search');
  };

  const handleFavoritesClick = () => {
    navigate('/vacancy');
  };

  return (
    <Header height={84} className={styles.CustomHeader}>
      <div className={styles.Logo}>
        <img src={logo} alt="Logo" />
      </div>
      <div className={styles.Menu}>
        <Text onClick={handleSearchClick}>Поиск вакансий</Text>
        <Text onClick={handleFavoritesClick}>Избранное</Text>
      </div>
    </Header>
  );
};
