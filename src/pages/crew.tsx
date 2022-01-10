import classNames from 'classnames';
import type { NextPage } from 'next';
import Image from 'next/image';
import { SkipToContentButton } from '../components/SkipToContentButton';
import { PrimaryHeader } from '../components/PrimaryHeader';
import { NumberedTitle } from '../components/NumberedTitle';
import { Typography } from '../components/Typography';
import { Dot, Dots } from '../components/Dots';
import styles from '../styles/Crew.module.css';

const Crew: NextPage = () => {
  return (
    <div className={classNames(styles.crew, styles.bgImage)}>
      <SkipToContentButton />
      <PrimaryHeader />

      <main id="main" className={classNames("grid-container", styles.gridContainer, 'flow')}>
        <NumberedTitle className={styles.numberedTitle} number='02' text='Meet your crew' />
        <Dots className={styles.dotIndicators}>
          <Dot selected>The commander</Dot>
          <Dot selected={false}>The mission specialist</Dot>
          <Dot selected={false}>The pilot</Dot>
          <Dot selected={false}>The crew engineer</Dot>
        </Dots>
        <article className={styles.crewDetails}>
          <Typography as="h2" className="fs-600 ff-serif uppercase">Commander</Typography>
          <Typography className="fs-700 uppercase ff-serif">Doublas Hurley</Typography>
          <Typography>
            Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
            and former NASA astronaut. He launched into space for the third time as 
            commander of Crew Dragon Demo-2.
          </Typography>
        </article>
        <div className={styles.image}>
          <Image
            src="/assets/crew/image-douglas-hurley.png"
            alt="Douglas Hurley"
            width="514"
            height="700"
          />
        </div>
      </main>
    </div>
  );
}

export default Crew;
