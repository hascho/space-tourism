import styles from './NumberedTitle.module.css';
import { Typography } from '../../../Typography';
import { NumberedTitleProps } from './NumberedTitle.types';

export const NumberedTitle = (props: NumberedTitleProps) => {
  const { number, text, as: component = "h1" } = props;

  return (
    <Typography as={component} className={styles.numberedTitle}>
      <span aria-hidden>{number}</span>{' '}{text}
    </Typography>
  );
}
