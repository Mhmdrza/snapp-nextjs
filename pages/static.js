import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home({ data = []}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
          static
        </h1>
        {data.map(obj=><p>
            <span>{obj.title}</span>
            <span>{obj.body}</span>
          </p>)}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps(context) {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts').then(r=>r.json())
  return {
    props: {data}, // will be passed to the page component as props
  }
}