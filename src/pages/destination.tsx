import { useState } from 'react';
import clsx from 'clsx';
import type { NextPage } from 'next';
import Image from 'next/image';
import { SkipToContentButton } from '../components/SkipToContentButton';
import { PrimaryHeader } from '../components/PrimaryHeader';
import { NumberedTitle } from '../components/NumberedTitle';
import { Tabs, Tab, TabContext, TabPanel } from '../components/Tabs';
import { Typography } from '../components/Typography';
import styles from '../styles/Destination.module.css';

const Destination: NextPage = () => {
  const [destination, setDestination] = useState('moon');

  const handleChange = (_event: any, newValue: string) => {
    setDestination(newValue);
  }

  return (
    <div className={clsx(styles.destination, styles.bgImage)}>
      <SkipToContentButton />
      <PrimaryHeader />

      <main id="main" className={clsx("grid-container", styles.gridContainer, 'flow')}>
        <NumberedTitle className={styles.numberedTitle} number='01' text='Pick your destination' />
        <picture className={styles.image}>
          <source srcSet={`/assets/destination/image-${destination}.webp`} type="image/webp" />
          <Image
            src={`/assets/destination/image-${destination}.png`}
            alt="the moon"
            layout="responsive"
            width="100%"
            height="100%"
            objectFit="contain"
          />
        </picture>

        <TabContext value={destination}>
          <Tabs className={styles.tabList} onChange={handleChange}>
            <Tab value="moon">Moon</Tab>
            <Tab value="mars">Mars</Tab>
            <Tab value="europa">Europa</Tab>
            <Tab value="titan">Titan</Tab>
          </Tabs>
          <div className={styles.destinationInfo}>
            <TabPanel value="moon">
              <article className={clsx(styles.destinationInfo, 'flow')}>
                <Typography as='h2' className="fs-800 uppercase ff-serif">Moon</Typography>
                <Typography>
                  See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
                  regain perspective and come back refreshed. While you’re there, take in some history 
                  by visiting the Luna 2 and Apollo 11 landing sites.
                </Typography>

                <div className={clsx(styles.destinationMeta, 'flex')}>
                  <div>
                    <Typography as='h3' className='text-accent fs-200 uppercase'>Avg. distance</Typography>
                    <Typography className='ff-serif uppercase'>384,400 km</Typography>
                  </div>
                  <div>
                    <Typography as='h3' className='text-accent fs-200 uppercase'>Est. travel time</Typography>
                    <Typography className='ff-serif uppercase'>3 days</Typography>
                  </div>
                </div>
              </article>
            </TabPanel>
            <TabPanel value="mars">
              <article className={clsx('flow')}>
                <Typography as='h2' className="fs-800 uppercase ff-serif">Mars</Typography>
                <Typography>
                  Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
                  the tallest planetary mountain in our solar system. It’s two and a half times 
                  the size of Everest!
                </Typography>

                <div className={clsx(styles.destinationMeta, 'flex')}>
                  <div>
                    <Typography as='h3' className='text-accent fs-200 uppercase'>Avg. distance</Typography>
                    <Typography className='ff-serif uppercase'>225 mil. km</Typography>
                  </div>
                  <div>
                    <Typography as='h3' className='text-accent fs-200 uppercase'>Est. travel time</Typography>
                    <Typography className='ff-serif uppercase'>9 months</Typography>
                  </div>
                </div>
              </article>
            </TabPanel>
            <TabPanel value="europa">
              <article className={clsx('flow')}>
                <Typography as='h2' className="fs-800 uppercase ff-serif">Europa</Typography>
                <Typography>
                  The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
                  winter lover’s dream. With an icy surface, it’s perfect for a bit of 
                  ice skating, curling, hockey, or simple relaxation in your snug 
                  wintery cabin.
                </Typography>

                <div className={clsx(styles.destinationMeta, 'flex')}>
                  <div>
                    <Typography as='h3' className='text-accent fs-200 uppercase'>Avg. distance</Typography>
                    <Typography className='ff-serif uppercase'>628 mil. km</Typography>
                  </div>
                  <div>
                    <Typography as='h3' className='text-accent fs-200 uppercase'>Est. travel time</Typography>
                    <Typography className='ff-serif uppercase'>3 years</Typography>
                  </div>
                </div>
              </article>
            </TabPanel>
            <TabPanel value="titan">
              <article className={clsx('flow')}>
                <Typography as='h2' className="fs-800 uppercase ff-serif">Titan</Typography>
                <Typography>
                  The only moon known to have a dense atmosphere other than Earth, Titan 
                  is a home away from home (just a few hundred degrees colder!). As a 
                  bonus, you get striking views of the Rings of Saturn.
                </Typography>

                <div className={clsx(styles.destinationMeta, 'flex')}>
                  <div>
                    <Typography as='h3' className='text-accent fs-200 uppercase'>Avg. distance</Typography>
                    <Typography className='ff-serif uppercase'>1.6 bil. km</Typography>
                  </div>
                  <div>
                    <Typography as='h3' className='text-accent fs-200 uppercase'>Est. travel time</Typography>
                    <Typography className='ff-serif uppercase'>7 days</Typography>
                  </div>
                </div>
              </article>
            </TabPanel>
          </div>
        </TabContext>
      </main>
    </div>
  );
}

export default Destination;
