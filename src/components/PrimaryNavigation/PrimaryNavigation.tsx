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
        className="uppercase text-white letter-spacing-2"
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
          <span>01</span>Active
        </PrimaryNavigationItem>
        <PrimaryNavigationItem active={false}>
          <span>02</span>Hovered
        </PrimaryNavigationItem>
        <PrimaryNavigationItem active={false}>
          <span>03</span>Idle
        </PrimaryNavigationItem>
      </ul>
    </nav>
  );
}

export default PrimaryNavigation;
