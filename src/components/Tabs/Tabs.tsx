import { ReactNode } from 'react'
import classNames from 'classnames'
import styles from './Tabs.module.css'

interface TabProps {
  selected: boolean;
  children: ReactNode;
}

function Tab({ selected, children }: TabProps) {
  return (
    <button
      className={classNames(
        'uppercase',
        'text-accent',
        'ff-sans-cond',
        'bg-dark',
        'letter-spacing-2'
      )}
      aria-selected={selected ? "true" : "false"}
    >
      {children}
    </button>
  );
}

function Tabs() {
  return (
    <div className={classNames(
      styles.tabs,
      'underline-indicators',
      'flex'
    )}>
      <Tab selected>a</Tab>
      <Tab selected={false}>b</Tab>
      <Tab selected={false}>c</Tab>
    </div>
  );
}

export default Tabs;
