import styles from './NumberedTitle.module.css';

interface NumberedTitleProps {
  number: string;
  text: string;
}

function NumberedTitle({ number, text }: NumberedTitleProps) {
  return (
    <h2 className={styles.numberedTitle}><span>{number}</span>{' '}{text}</h2>
  );
}

export default NumberedTitle;
