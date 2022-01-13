import { MouseEventHandler, ReactNode, SyntheticEvent } from 'react';

export type TabProps = {
  value: string;
  children: ReactNode;
  id?: string;
  selected?: boolean;
  'aria-controls'?: string;
  tabIndex?: number;
  onChange?: (event: SyntheticEvent, value: string) => void;
  onClick?: MouseEventHandler;
}
