import clsx from 'clsx';
import type { TabsProps } from './Tabs.types';
import styles from './Tabs.module.css';

export const Tabs = (props: TabsProps) => {
  const { children, className } = props;
  return (
    <div className={clsx(
      styles.tabs,
      'underline-indicators',
      'flex',
      className,
    )}>
      {children}
    </div>
  );
}
