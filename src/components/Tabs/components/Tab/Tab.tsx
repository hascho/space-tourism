import clsx from 'clsx';
import type { TabProps } from './Tab.types';

export const Tab = ({ selected, children }: TabProps) => {
  return (
    <button
      className={clsx(
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
