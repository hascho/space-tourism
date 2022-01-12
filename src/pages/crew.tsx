import clsx from 'clsx';
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
    <div className={clsx(styles.crew, styles.bgImage)}>
      <SkipToContentButton />
      <PrimaryHeader />

      <main id="main" className={clsx("grid-container", styles.gridContainer, 'flow')}>
        <NumberedTitle className={styles.numberedTitle} number='02' text='Meet your crew' />
        <Dots className={styles.dotIndicators}>
          <Dot selected>The commander</Dot>
          <Dot selected={false}>The mission specialist</Dot>
          <Dot selected={false}>The pilot</Dot>
          <Dot selected={false}>The crew engineer</Dot>
        </Dots>
        <article className={clsx(styles.crewDetails, 'flow')}>
          <header className='flow flow--space-small'>
            <Typography as="h2" className="fs-600 ff-serif uppercase">Commander</Typography>
            <Typography className="fs-700 uppercase ff-serif">Douglas Hurley</Typography>
          </header>
          <Typography>
            Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
            and former NASA astronaut. He launched into space for the third time as 
            commander of Crew Dragon Demo-2.
          </Typography>
        </article>
        <picture className={styles.image}>
          <source srcSet="/assets/crew/image-douglas-hurley.webp" type="image/webp" />
          <Image
            src="/assets/crew/image-douglas-hurley.png"
            alt="Douglas Hurley"
            layout="responsive"
            width="100%"
            height="100%"
            objectFit="contain"
          />
        </picture>
      </main>
    </div>
  );
}

export default Crew;
