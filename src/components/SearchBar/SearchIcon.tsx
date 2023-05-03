import Search from 'assets/images/Search.svg';
import styles from './SearchBar.module.scss';

export function SearchIcon() {
  return (
    <div className={styles.SearchIcon}>
      <img src={Search} alt="Search" />
    </div>
  );
}
