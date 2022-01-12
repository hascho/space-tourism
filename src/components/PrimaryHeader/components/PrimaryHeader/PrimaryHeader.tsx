
import clsx from 'clsx';
import { PrimaryNavigation } from '../../../PrimaryNavigation';
import { Logo } from '../Logo';
import styles from './PrimaryHeader.module.css';

export const PrimaryHeader = () => {
  return (
    <header className={clsx(styles.primaryHeader, 'flex')}>
      <Logo />
      <PrimaryNavigation />
    </header>
  );
}
