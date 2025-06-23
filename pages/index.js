
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>WickedGuides - No Rest for the Wicked Builds</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>WickedGuides.com</h1>
        <p>NRFTW Builds - Full-Stack Site Under Construction</p>
      </main>
    </div>
  )
}
