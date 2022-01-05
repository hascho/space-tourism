import { ReactNode } from 'react';
import classNames from 'classnames';

interface PrimaryNavigationProps {
  active: boolean;
  children: ReactNode
}

export const PrimaryNavigationItem = ({ active, children }: PrimaryNavigationProps) => {
  return (
    <li className={classNames({'active': active})}>
      <a
        className="ff-sans-cond uppercase text-white letter-spacing-2"
        href="#"
      >
        {children}
      </a>
    </li>
  );
}
