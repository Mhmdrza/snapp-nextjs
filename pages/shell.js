import Head from 'next/head'
import styles from '../styles/Home.module.css'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Home() {
  const { data =[], error } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Snapp!
        </h1>
        <h2 className={styles.title}>
          دانلود برنامه اسنپ مسافران
        </h2>
        <img src="" alt='' />
        <div>
          <h2>آشنایی با سرویس‌های اسنپ</h2>
          {data.map(obj=><p>
            <span>{obj.title}</span>
            <span>{obj.body}</span>
          </p>)}
        </div>
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
