import classNames from 'classnames'
import { NavToggle } from '../NavToggle';
import { PrimaryNavigationItem } from '../PrimaryNavigationItem';
import styles from './PrimaryNavigation.module.css'

export const PrimaryNavigation = () => {
  return (
    <>
      <NavToggle />
      <nav>
        <ul
          id="primary-navigation"
          className={classNames(styles.primaryNavigation, 'underline-indicators', 'flex')}
        >
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
    </>
  );
}
