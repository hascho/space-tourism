import type { NextPage } from 'next'
import classNames from 'classnames';
import Image from 'next/image';
import { SkipToContentButton } from '../components/SkipToContentButton';
import { PrimaryHeader } from '../components/PrimaryHeader';
import { NumberedTitle } from '../components/NumberedTitle';
import { Tabs, Tab } from '../components/Tabs';
import { Typography } from '../components/Typography';
import styles from '../styles/Destination.module.css';

const Destination: NextPage = () => {
  return (
    <div className={classNames(styles.destination, styles.bgImage)}>
      <SkipToContentButton />
      <PrimaryHeader />

      <main id="main" className={classNames("grid-container", styles.gridContainer)}>
        <NumberedTitle number='01' text='Pick your destination' />
        <Image
          src="/assets/destination/image-moon.png"
          alt="the moon"
          layout="fixed"
          width="445"
          height="445"
        />

        <Tabs>
          <Tab selected>Moon</Tab>
          <Tab selected={false}>Mars</Tab>
          <Tab selected={false}>Europa</Tab>
          <Tab selected={false}>Titan</Tab>
        </Tabs>

        <article>
          <Typography as='h2'>Moon</Typography>
          <Typography>
            See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
            regain perspective and come back refreshed. While you’re there, take in some history 
            by visiting the Luna 2 and Apollo 11 landing sites.
          </Typography>

          <div className='flex'>
            <div>
              <Typography as='h3' className='text-accent fs-200 uppercase'>Avg. distance</Typography>
              <Typography className='fs-500 ff-serif uppercase'>384,400 km</Typography>
            </div>
            <div>
              <Typography as='h3' className='text-accent fs-200 uppercase'>Est. travel time</Typography>
              <Typography className='fs-500 ff-serif uppercase'>3 days</Typography>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}

export default Destination;
