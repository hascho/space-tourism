import { SyntheticEvent, MouseEvent } from 'react';
import clsx from 'clsx';
import type { TabProps } from './Tab.types';

export const Tab = (props: TabProps) => {
  const {
    selected,
    id,
    children,
    'aria-controls': ariaControls,
    value,
    onChange,
    onClick,
  } = props;

  const handleClick = (event: SyntheticEvent) => {
    if (!selected && onChange) {
      onChange(event, value);
    }

    onClick?.(event as MouseEvent)
  }

  return (
    <button
      className={clsx(
        'uppercase',
        'text-accent',
        'ff-sans-cond',
        'letter-spacing-2'
      )}
      id={id}
      role="tab"
      aria-selected={!!selected}
      aria-controls={ariaControls}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
