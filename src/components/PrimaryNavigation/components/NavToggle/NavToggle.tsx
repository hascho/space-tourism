import type { NavToggleProps } from './NavToggle.types';
import styles from './NavToggle.module.css'

export const NavToggle = (props: NavToggleProps) => {
  const { toggleState, onClick } = props;

  return (
    <button
      className={styles.navToggle}
      aria-controls="primary-navigation"
      aria-expanded={toggleState}
      onClick={onClick}
    >
      <span className="sr-only">Menu</span>
    </button>
  );
}
