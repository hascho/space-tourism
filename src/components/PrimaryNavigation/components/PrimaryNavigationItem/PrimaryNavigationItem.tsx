import { ReactNode } from 'react';
import classNames from 'classnames';
import Link from 'next/link'

interface PrimaryNavigationProps {
  url: string;
  active: boolean;
  children: ReactNode;
}

export const PrimaryNavigationItem = ({ url, active, children }: PrimaryNavigationProps) => {
  return (
    <li className={classNames({'active': active})}>
      <Link href={url}>
        <a className="ff-sans-cond uppercase text-white letter-spacing-2">
          {children}
        </a>
      </Link>
    </li>
  );
}
