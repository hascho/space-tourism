import Image from 'next/image'
import styles from './Logo.module.css';

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <Image src="/assets/shared/logo.svg" alt="space tourism logo" width="48" height="48" />
    </div>
  );
}
