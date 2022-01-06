import classNames from 'classnames'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Dots from '../components/Dots'
import ExploreButton from '../components/ExploreButton'
import NumberedButton from '../components/NumberedButton'
import NumberedTitle from '../components/NumberedTitle'
import { PrimaryHeader } from '../components/PrimaryHeader'
import Tabs from '../components/Tabs'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    // <div className={styles.container}>
    //   <Head>
    //     <title>Create Next App</title>
    //     <meta name="description" content="Generated by create next app" />
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <main className={styles.main}>
    //   </main>

    //   <footer className={styles.footer}>
    //     <a
    //       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Powered by{' '}
    //       <span className={styles.logo}>
    //         <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    //       </span>
    //     </a>
    //   </footer>
    // </div>
    // <div className="container flex">
    //   <div className="box"><h1>a</h1></div>
    //   <div className="box"><NumberedTitle number="2" text="example" /></div>
    //   <div className="box"><ExploreButton /></div>
    //   <div className="box">d</div>
    //   <div className="box"><PrimaryNavigation /></div>
    //   <div className="box"><Tabs /></div>
    //   <div className="box"><Dots /></div>
    //   <div className="box flow">
    //     <NumberedButton selected>1</NumberedButton>
    //     <NumberedButton selected={false}>2</NumberedButton>
    //   </div>
    // </div>
    <div className={classNames(styles.home, styles.bgImage)}>
      <a href="#main" className="skip-to-content">Skip to content</a>
      <PrimaryHeader />

      <main id="main" className={classNames("grid-container", styles.gridContainer)}>
        <div>
          <h1 className="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">So, you want to travel to
          <span className="d-block fs-900 ff-serif text-white">Space</span></h1>
          <p>Let’s face it; if you want to go to space, you might as well genuinely go to 
          outer space and not hover kind of on the edge of it. Well sit back, and relax 
          because we’ll give you a truly out of this world experience!</p>
        </div>
        <div>
          <ExploreButton />
        </div>
      </main>
    </div>
  )
}

export default Home
