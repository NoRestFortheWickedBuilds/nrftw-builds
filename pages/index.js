
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wicked Guides</title>
      </Head>

      <header className={styles.header}>
        <img src="/background/header-background.jpeg" alt="Header Background" className={styles.headerBackground} />
        <h1 className={styles.title}>Wicked Guides</h1>
      </header>

      <nav className={styles.navbar}>
        <a href="/">Meta Builds</a>
        <a href="/">Leveling Guide</a>
        <a href="/">TierList</a>
        <a href="/">My Builds</a>
        <a href="/">Build Planner</a>
        <a href="/">Map</a>
        <a href="/">Database</a>
      </nav>

      <main className={styles.main}>
        <h2 className={styles.sectionTitle}>Meta Builds</h2>
        <div className={styles.buildList}>
          <a href="/builds/cold-mage" className={styles.buildCard}>Cold Mage</a>
          <a href="/builds/fire-mage" className={styles.buildCard}>Fire Mage</a>
          <a href="/builds/lightning-mage" className={styles.buildCard}>Lightning Mage</a>
          <a href="/builds/bow" className={styles.buildCard}>Bow</a>
          <a href="/builds/melee-tank" className={styles.buildCard}>Melee Tank</a>
          <a href="/builds/ninja-wakizashi" className={styles.buildCard}>Ninja Wakizashi</a>
          <a href="/builds/samurai" className={styles.buildCard}>Samurai</a>
        </div>
      </main>
    </div>
  );
}
