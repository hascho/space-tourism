
import classNames from 'classnames';
import { PrimaryNavigation } from '../../../PrimaryNavigation';
import { Logo } from '../Logo';
import styles from './PrimaryHeader.module.css';

export const PrimaryHeader = () => {
  return (
    <header className={classNames(styles.primaryHeader, 'flex')}>
      <Logo />
      <PrimaryNavigation />
    </header>
  );
}
