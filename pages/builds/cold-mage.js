
import Head from 'next/head';
import styles from '../../styles/Build.module.css';

export default function ColdMage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cold Mage Build - Wicked Guides</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Cold Mage Build</h1>
        <h2 className={styles.subtitle}>By Larry Puss</h2>

        <div className={styles.section}>
          <h3>Weapons & Gear</h3>
          <ul>
            <li><strong>Weapon 1:</strong> Endless Winter</li>
            <li> - Homing Frost, Frost Stream, Homing Flurry, Lifesteal</li>
            <li> - Enchants: +30% Damage vs Large, +15 Focus on Kill, +25% Stamina Recovery, Indestructible, Unrepairable</li>
            <li><strong>Helmet:</strong> Cloth</li>
            <li> - Gem: +15% Max Focus</li>
            <li> - Enchants: +25% Cold Damage, +15 Focus on Buildup, +6% Health per Rune Attack, -15% Weight, Any</li>
            <li><strong>Body Armor:</strong> Cloth</li>
            <li> - Gem: +15% Max Health</li>
            <li> - Enchants: -10% Damage Taken (Durability), +20% Focus Gain (Durability), -50% Frozen Enemy Armor, Indestructible, Unrepairable</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3>Video Guide</h3>
          <a href="https://youtu.be/bZde1LrAmAE?si=f-OlHsT_Nv8G9BSa" target="_blank" rel="noopener noreferrer">
            Watch on YouTube
          </a>
        </div>
      </main>
    </div>
  );
}
