import type { NavToggleProps } from './NavToggle.types';
import styles from './NavToggle.module.css'

export const NavToggle = (props: NavToggleProps) => {
  const { onClick } = props;

  return (
    <button
      className={styles.navToggle}
      aria-controls="primary-navigation"
      aria-expanded="false"
      onClick={onClick}
    >
      <span className="sr-only">Menu</span>
    </button>
  );
}
