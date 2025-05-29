import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>No Rest for the Wicked Builds</title>
        <meta name="description" content="Featured NRFTW builds by top creators" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>No Rest for the Wicked Builds</h1>
        <p className={styles.subtitle}>Tap a build below to view full details</p>
        <div className={styles.grid}>
          <Link href="/juggernaut" className={styles.card}>
            <h2>Juggernaut Build</h2>
            <p>by Larry Puss – Tier S</p>
            <p>💥 Tanky & Rune-Supported Greatsword Build</p>
          </Link>
        </div>
      </main>
    </div>
  )
}
