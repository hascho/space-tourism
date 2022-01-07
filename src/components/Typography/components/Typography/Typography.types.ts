import { ReactNode } from 'react';

export type ComponentTypes = 'p' | 'h1' | 'h2';

export type TypographyProps = {
  as?: ComponentTypes;
  className?: string;
  children: ReactNode;
}
