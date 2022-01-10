import classNames from 'classnames';
import type { DotsProps } from './Dots.types';
import styles from './Dots.module.css';

export const Dots = (props: DotsProps) => {
  const { children } = props;
  return (
    <div className={classNames(
      styles.dotIndicators,
      'flex'
    )}>
      {children}
    </div>
  );
}
