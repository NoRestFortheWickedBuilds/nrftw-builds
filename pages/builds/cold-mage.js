
import Image from 'next/image';
import styles from '../../styles/Build.module.css';

export default function ColdMage() {
  return (
    <div className={styles.container}>
      <div className={styles.background}></div>
      <main className={styles.main}>
        <h1 className={styles.title}>Cold Mage Build</h1>
        <h2 className={styles.creator}>by Larry Puss</h2>
        <p><a href="https://youtu.be/bZde1LrAmAE?si=f-OlHsT_Nv8G9BSa" target="_blank" rel="noopener noreferrer" className={styles.videoLink}>Watch Video Guide</a></p>
        
        <section className={styles.statsSection}>
          <h3>Character Stats</h3>
          <ul>
            <li><strong>Health:</strong> 40</li>
            <li><strong>Stamina:</strong> 10</li>
            <li><strong>Strength:</strong> 10</li>
            <li><strong>Dexterity:</strong> 10</li>
            <li><strong>Intelligence:</strong> 10</li>
            <li><strong>Faith:</strong> 55</li>
            <li><strong>Focus:</strong> 20</li>
            <li><strong>Equip Load:</strong> 12</li>
          </ul>
        </section>

        <section className={styles.gearSection}>
          <h3>Gear</h3>
          
          <h4>Weapon 1: Endless Winter</h4>
          <p><strong>Gem:</strong> Lifesteal</p>
          <p><strong>Runes:</strong> Homing Frost, Frost Stream, Homing Flurry</p>
          <p><strong>Enchantments:</strong></p>
          <ul>
            <li>Damage increased by 30% against Large Enemies</li>
            <li>Gain 15 Focus on Kill</li>
            <li>Stamina Recovery increased by up to 25% based on Durability</li>
            <li>Indestructible</li>
            <li>Unrepairable</li>
          </ul>

          <h4>Helmet: Cloth</h4>
          <p><strong>Gem:</strong> Max Focus increased by 15%</p>
          <p><strong>Enchantments:</strong></p>
          <ul>
            <li>Cold Damage increased by 25%</li>
            <li>Gain 15 Focus on inflicint any buildup</li>
            <li>Gain 6% Health once per Rune Attack</li>
            <li>Item Weight decreased by 15%</li>
            <li>Can equip any Rune</li>
          </ul>

          <h4>Body Armor: Cloth</h4>
          <p><strong>Gem:</strong> Max Health increased by 15%</p>
          <p><strong>Enchantments:</strong></p>
          <ul>
            <li>Damage Taken decreased by 10% based on Durability</li>
            <li>Focus Gain increased by up to 20% based on Durability</li>
            <li>Frozen Enemy Armor decreased by 50%</li>
            <li>Indestructible</li>
            <li>Unrepairable</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
