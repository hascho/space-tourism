import type { DotProps } from './Dot.types';

export const Dot = (props: DotProps) => {
  const { selected, children } = props;

  return (
    <button aria-selected={selected ? "true": "false"}>
      <span className="sr-only">
        {children}
      </span>
    </button>
  );
}
