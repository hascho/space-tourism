import { ReactElement, SyntheticEvent } from "react";

export type TabsProps = {
  children: ReactElement | ReactElement[];
  className?: string;
  onChange: (event: SyntheticEvent, value: string) => void;
}
