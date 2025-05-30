import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Build.module.css'

export default function JuggernautBuild() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Juggernaut Build – No Rest for the Wicked</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Juggernaut Build</h1>
        <p className={styles.meta}>by Larry Puss – Max Level Build</p>

        <section className={styles.section}>
          <h2>Character Stats</h2>
          <table className={styles.statsTable}>
            <tbody>
              <tr><td>Health</td><td>40</td></tr>
              <tr><td>Stamina</td><td>10</td></tr>
              <tr><td>Strength</td><td>10</td></tr>
              <tr><td>Dexterity</td><td>10</td></tr>
              <tr><td>Intelligence</td><td>10</td></tr>
              <tr><td>Faith</td><td>57</td></tr>
              <tr><td>Focus</td><td>10</td></tr>
              <tr><td>Equip Load</td><td>20</td></tr>
            </tbody>
          </table>
        </section>

        <section className={styles.section}>
          <h2>Gear Overview</h2>
          <img src="/gear-placeholder.jpg" alt="Gear Screenshot" className={styles.gearImage} />
          <p className={styles.note}>Gear, runes, enchantments, and gems will be interactive in Stage 2.</p>
        </section>

        <Link href="/" className={styles.backLink}>← Back to Home</Link>
      </main>
    </div>
  )
}
