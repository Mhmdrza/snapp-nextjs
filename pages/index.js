import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Diffrenet rendering strategies
        </h1>

        <div className={styles.grid}>
          <a href="/shell" className={styles.card}>
            <h3>Shell</h3>
            {/* <p>Find in-depth information about Next.js features and API.</p> */}
          </a>

          <a href="/static" className={styles.card}>
            <h3>Static</h3>
            {/* <p>Learn about Next.js in an interactive course with quizzes!</p> */}
          </a>

          <a
            href="https://snapp.ir"
            className={styles.card}
          >
            <h3>Client side</h3>
            {/* <p>Discover and deploy boilerplate example Next.js projects.</p> */}
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
        copyright and other stuff
      </footer>
    </div>
  )
}
