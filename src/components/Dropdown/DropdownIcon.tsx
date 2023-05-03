import VerticalArrow from 'assets/images/VerticalArrow.svg';
import styles from './Dropdown.module.scss';

export function DropdownIcon() {
  return (
    <div className={styles.DropdownIcon}>
      <img src={VerticalArrow} alt="Search" />
    </div>
  );
}
