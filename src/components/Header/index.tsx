import { Header, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';
import Logo from 'assets/images/Logo.svg';

export const CustomHeader = () => {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate('/search');
  };

  const handleFavoritesClick = () => {
    navigate('/saved');
  };

  return (
    <Header height={84} className={styles.CustomHeader}>
      <div className={styles.Logo}>
        <img src={Logo} alt="Logo" />
      </div>
      <div className={styles.Menu}>
        <Text onClick={handleSearchClick} className={styles.text}>
          Поиск вакансий
        </Text>
        <Text onClick={handleFavoritesClick} className={styles.text}>
          Избранное
        </Text>
      </div>
    </Header>
  );
};
