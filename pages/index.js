
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>WickedGuides - NRFTW Builds</title>
      </Head>

      <header className={styles.header}>
        <img src="/header-background.jpeg" alt="Header Background" className={styles.headerBackground} />
        <h1 className={styles.title}>WickedGuides</h1>
      </header>

      <nav className={styles.navbar}>
        <a href="#">Meta Builds</a>
        <a href="#">Leveling Guide</a>
        <a href="#">TierList</a>
        <a href="#">My Builds</a>
        <a href="#">Build Planner</a>
        <a href="#">Map</a>
        <a href="#">Database</a>
      </nav>

      <main className={styles.main}>
        <h2 className={styles.sectionTitle}>Meta Builds</h2>
        <div className={styles.buildList}>
          <a href="#" className={styles.buildCard}>❄ Cold Mage</a>
          <a href="#" className={styles.buildCard}>🔥 Fire Mage</a>
          <a href="#" className={styles.buildCard}>⚡ Lightning Mage</a>
          <a href="#" className={styles.buildCard}>🛡 Juggernaut</a>
          <a href="#" className={styles.buildCard}>⚔ Melee-Tank Build</a>
          <a href="#" className={styles.buildCard}>🏹 Bow Build</a>
          <a href="#" className={styles.buildCard}>🗡 Ninja-Wakizashi Build</a>
        </div>
      </main>
    </div>
  );
}
