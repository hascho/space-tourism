import classNames from 'classnames';
import type { TabProps } from './Tab.types';

export const Tab = ({ selected, children }: TabProps) => {
  return (
    <button
      className={classNames(
        'uppercase',
        'text-accent',
        'ff-sans-cond',
        'letter-spacing-2'
      )}
      role="tab"
      aria-selected={selected ? "true" : "false"}
    >
      {children}
    </button>
  );
}
