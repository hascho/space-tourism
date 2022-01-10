import type { ComponentTypes as TypographyTypes } from '../../../Typography';

export interface NumberedTitleProps {
  number: string;
  text: string;
  as?: Exclude<TypographyTypes, "p">;
  className?: string;
}
