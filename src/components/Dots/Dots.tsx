import classNames from "classnames"
import { ReactNode } from "react";
import styles from './Dots.module.css'

interface DotProps {
  selected: boolean;
  children: ReactNode;
}

function Dot({ selected, children }: DotProps) {
  return (
    <button aria-selected={selected ? "true": "false"}>
      <span className="sr-only">
        {children}
      </span>
    </button>
  );
}

function Dots() {
  return (
    <div className={classNames(
      styles.dotIndicators,
      'flex'
    )}>
      <Dot selected>Slide title</Dot>
      <Dot selected={false}>Slide title</Dot>
      <Dot selected={false}>Slide title</Dot>
    </div>
  );
}

export default Dots;
