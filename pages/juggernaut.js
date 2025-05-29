import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Build.module.css'

export default function JuggernautBuild() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Juggernaut Build – NRFTW</title>
        <meta name="description" content="Larry Puss' Juggernaut Build for No Rest for the Wicked – gear, enchantments, runes, and level-up progression." />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Juggernaut Build</h1>
        <p className={styles.meta}>by <strong>Larry Puss</strong> • Tier: <strong>S</strong></p>
        <div className={styles.videoWrapper}>
          <a href="https://www.youtube.com/watch?v=tehiq6Jflik" target="_blank" rel="noopener noreferrer">
            <img src="/juggernaut-thumb.jpg" alt="Juggernaut Build Video Thumbnail" className={styles.thumbnail} />
            <div className={styles.playOverlay}>▶ Watch on YouTube</div>
          </a>
        </div>

        <h2>Gear</h2>
        <ul>
          <li><strong>Weapon:</strong> The Breach (Two-Handed Sword)</li>
          <li><strong>Helm:</strong> Breach Helm</li>
          <li><strong>Armor:</strong> Breach Armor</li>
          <li><strong>Gloves:</strong> Breach Gauntlets</li>
          <li><strong>Leggings:</strong> Breach Greaves</li>
        </ul>

        <h2>Enchantments</h2>
        <ul>
          <li><strong>The Breach:</strong> Increased Poise Damage, Critical Chance</li>
          <li><strong>Armor:</strong> Increased Health, Physical Resistance</li>
          <li><strong>Accessories:</strong> Focus Regen, Equip Load</li>
        </ul>

        <h2>Runes</h2>
        <ul>
          <li><strong>Main Rune:</strong> Shatter</li>
          <li><strong>Secondary Runes:</strong> Restore, Rampage</li>
        </ul>

        <h2>Level-Up Stats at Level 35</h2>
        <ul>
          <li><strong>Strength:</strong> 28</li>
          <li><strong>Dexterity:</strong> 10</li>
          <li><strong>Focus:</strong> 22</li>
          <li><strong>Endurance:</strong> 15</li>
          <li><strong>Stamina:</strong> 10</li>
        </ul>

        <h2>Gameplay Style</h2>
        <p>Focuses on poise breaking enemies quickly, chaining runes for high burst, and sustaining through rune regen. Works best with aggressive positioning and timing Shatter at peak stagger windows.</p>

        <Link href="/" className={styles.backLink}>← Back to Home</Link>
      </main>
    </div>
  )
}
