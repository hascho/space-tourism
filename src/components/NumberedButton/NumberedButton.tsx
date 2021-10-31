import { ReactNode } from 'react';
import styles from './NumberedButton.module.css'

interface NumberedButtonProps {
  selected: boolean;
  children: ReactNode;
}

function NumberedButton({ selected, children }: NumberedButtonProps) {
  return (
    <button
      className={styles.numberedButton}
      aria-selected={selected ? "true" : "false"}
    >
      {children}
    </button>
  );
}

export default NumberedButton;
