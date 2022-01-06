import classNames from 'classnames'
import { NavToggle } from '../NavToggle';
import { PrimaryNavigationItem } from '../PrimaryNavigationItem';
import { useToggle } from '../NavToggle/useToggle';
import styles from './PrimaryNavigation.module.css'

export const PrimaryNavigation = () => {
  const [navOpen, toggleNav] = useToggle(false);

  return (
    <>
      <NavToggle toggleState={navOpen} onClick={toggleNav} />
      <nav>
        <ul
          id="primary-navigation"
          className={classNames(styles.primaryNavigation, 'underline-indicators', 'flex')}
          data-visible={navOpen}
        >
          <PrimaryNavigationItem active>
            <span aria-hidden>00</span>Home
          </PrimaryNavigationItem>
          <PrimaryNavigationItem active={false}>
            <span aria-hidden>01</span>Destination
          </PrimaryNavigationItem>
          <PrimaryNavigationItem active={false}>
            <span aria-hidden>02</span>Crew
          </PrimaryNavigationItem>
          <PrimaryNavigationItem active={false}>
            <span aria-hidden>03</span>Technology
          </PrimaryNavigationItem>
        </ul>
      </nav>
    </>
  );
}
