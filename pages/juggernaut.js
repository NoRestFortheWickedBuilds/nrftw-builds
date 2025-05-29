import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Build.module.css'

export default function JuggernautBuild() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Juggernaut Build – NRFTW</title>
        <meta name="description" content="Larry Puss' Juggernaut Build for No Rest for the Wicked – gear, stats, and level-up progression." />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Juggernaut Build</h1>
        <p className={styles.meta}>by <strong>Larry Puss</strong> • Tier: <strong>S</strong></p>
        <div className={styles.videoWrapper}>
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/tehiq6Jflik" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
        </div>

        <h2>Gear</h2>
        <ul>
          <li><strong>Weapon:</strong> Greatsword with Bleed</li>
          <li><strong>Helmet:</strong> Iron Helm</li>
          <li><strong>Armor:</strong> Heavy Plate with Defense Runes</li>
          <li><strong>Boots:</strong> Reinforced Greaves</li>
          <li><strong>Rings:</strong> Strength + Vitality Bonuses</li>
        </ul>

        <h2>Enchantments & Runes</h2>
        <ul>
          <li>Primary Rune: Poise Recovery</li>
          <li>Secondary Rune: Bleed Chance</li>
          <li>Enchants: Increased Max Health, Physical Resistance</li>
        </ul>

        <h2>Level-Up Progression</h2>
        <p>Use the slider to see stat allocation at different levels:</p>
        <div className={styles.sliderWrapper}>
          <input type="range" min="1" max="40" defaultValue="1" className={styles.slider} />
          <div className={styles.sliderLabel}>Level: 1</div>
        </div>
        <ul>
          <li><strong>Strength:</strong> Focus on this first (up to 20+)</li>
          <li><strong>Vitality:</strong> Gradually build alongside Strength</li>
          <li><strong>Dexterity:</strong> Optional, only for hit recovery</li>
        </ul>

        <Link href="/" className={styles.backLink}>← Back to Home</Link>
      </main>
    </div>
  )
}
