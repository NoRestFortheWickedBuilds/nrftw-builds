
import { useRouter } from 'next/router'
import styles from '../../styles/Build.module.css'

export default function BuildPage() {
  const router = useRouter()
  const { buildId } = router.query

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Build Page: {buildId}</h1>
      <p>Build details will appear here.</p>
    </div>
  )
}
