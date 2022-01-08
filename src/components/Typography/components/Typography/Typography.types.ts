import { ReactNode } from 'react';

export type ComponentTypes =
  | 'p'
  | 'h1'
  | 'h2'
  | 'h3';

export type TypographyProps = {
  as?: ComponentTypes;
  className?: string;
  children: ReactNode;
}
