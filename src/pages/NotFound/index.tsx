import { Button } from '@mantine/core';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';
import NotFoundSvg from 'assets/images/NotFound.svg'

export function NotFound() {
  return (
    <div className={styles.Container}>
      <div>
        <img src={NotFoundSvg} alt="Not Found" />
        <h2>Упс, здесь еще ничего нет!</h2>
        <Button component={Link} to="/search" className={styles.Button}>
          <p>Поиск Вакансий</p>
        </Button>
      </div>
    </div>
  );
}
