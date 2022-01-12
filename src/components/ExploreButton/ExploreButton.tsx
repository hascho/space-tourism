import clsx from 'clsx';
import styles from './ExploreButton.module.css';

function ExploreButton() {
  return (
    <a
      className={clsx(
        styles.largeButton,
        'uppercase', 'ff-serif', 'text-dark', 'bg-white'
      )}
      role="button"
      tabIndex={0}
    >
      Explore
    </a>
  );
}

export default ExploreButton;
