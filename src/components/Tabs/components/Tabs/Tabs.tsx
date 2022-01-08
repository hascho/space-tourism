import classNames from 'classnames';
import type { TabsProps } from './Tabs.types';
import styles from './Tabs.module.css';

export const Tabs = ({ children }: TabsProps) => {
  return (
    <div className={classNames(
      styles.tabs,
      'underline-indicators',
      'flex'
    )}>
      {children}
    </div>
  );
}
