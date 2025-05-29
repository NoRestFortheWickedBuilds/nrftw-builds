import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const featuredBuilds = [
  {
    title: "Brutal Bleed Build",
    creator: "Larry Puss",
    levelRange: "1–35",
    tier: "S",
    video: "https://youtube.com/placeholder1"
  },
  {
    title: "Holy Flame Paladin",
    creator: "Ginger Prime",
    levelRange: "1–30",
    tier: "A",
    video: "https://youtube.com/placeholder2"
  },
  {
    title: "Runic Glass Cannon",
    creator: "Snapziey",
    levelRange: "1–40",
    tier: "S",
    video: "https://youtube.com/placeholder3"
  }
]

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>No Rest for the Wicked Builds</title>
        <meta name="description" content="Community-sourced builds for NRFTW with gear, enchantments, runes, and level pathing." />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>No Rest for the Wicked Builds</h1>
        <p className={styles.subtitle}>Explore powerful builds with gear setups, enchantments, and level-up paths.</p>
        <div className={styles.grid}>
          {featuredBuilds.map((build, index) => (
            <Link href={build.video} key={index} target="_blank" className={styles.card}>
              <h2>{build.title}</h2>
              <p><strong>Creator:</strong> {build.creator}</p>
              <p><strong>Level Range:</strong> {build.levelRange}</p>
              <p><strong>Tier:</strong> {build.tier}</p>
              <p>🎥 Watch Video</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
