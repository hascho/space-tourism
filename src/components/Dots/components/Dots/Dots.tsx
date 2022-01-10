import classNames from 'classnames';
import type { DotsProps } from './Dots.types';
import styles from './Dots.module.css';

export const Dots = (props: DotsProps) => {
  const { children, className } = props;
  return (
    <div className={classNames(
      styles.dotIndicators,
      'flex',
      className
    )}>
      {children}
    </div>
  );
}
