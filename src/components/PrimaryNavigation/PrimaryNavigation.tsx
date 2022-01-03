import classNames from 'classnames'
import { ReactNode } from 'react'
import styles from './PrimaryNavigation.module.css'

interface PrimaryNavigationProps {
  active: boolean;
  children: ReactNode
}

function PrimaryNavigationItem({ active, children }: PrimaryNavigationProps) {
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

function PrimaryNavigation() {
  return (
    <nav>
      <ul className={classNames(styles.primaryNavigation, 'underline-indicators', 'flex')}>
        <PrimaryNavigationItem active>
          <span>00</span>Home
        </PrimaryNavigationItem>
        <PrimaryNavigationItem active={false}>
          <span>01</span>Destination
        </PrimaryNavigationItem>
        <PrimaryNavigationItem active={false}>
          <span>02</span>Crew
        </PrimaryNavigationItem>
        <PrimaryNavigationItem active={false}>
          <span>03</span>Technology
        </PrimaryNavigationItem>
      </ul>
    </nav>
  );
}

export default PrimaryNavigation;
