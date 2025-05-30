import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>No Rest for the Wicked Builds</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>No Rest for the Wicked Builds</h1>
        <div className={styles.grid}>
          <Link href="/juggernaut" className={styles.card}>
            <h2>Juggernaut Build</h2>
            <p>by Larry Puss</p>
            <p>Fastest + Highest Damage (Faith-Based)</p>
          </Link>
        </div>
      </main>
    </div>
  )
}
