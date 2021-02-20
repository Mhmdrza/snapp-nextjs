import Head from 'next/head'
import React from 'react'
import styles from '../styles/Home.module.css'

function Landing({data}) {
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
          با اسنپ! زندگی را ساده‌تر و سریع‌تر تجربه کنید.
        </h2>
        <p>اسنپ! به شما کمک میکنه ساده‌تر سفر کنید، غذا سفارش دهید و خرید کنید، جابجا بشید و …</p>
        <img src="" alt='' />
          <h2>یک اپلیکیشن، برای تمام نیاز‌ها</h2>
        <div className={styles.vendors}>
          {data.map(obj=><p className={styles.vechorCard}>
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

export default Landing
