import Head from 'next/head'
import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

function Landing({data}) {
    return (
        <div className={styles.container}>
      <Head>
        <title>Snapp redesign</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <header className={styles.header}>
            <a href='/'>Snapp!</a>
            <nav>
                <a href='#d'>{' تماس با ما'}</a>
                <a href='#d'>{' گزارش نهایی'}</a>
                <a href='#d'>{' رانندگان'}</a>
                <a href='#d'>{' سازمانی'}</a>
            </nav>
        </header>
      <main className={styles.main}>
        <div className={styles.intro}>
            <h1 className={styles.title}>
            Snapp!
            </h1>
            <h2 className={styles.title}>
            با اسنپ! زندگی را ساده‌تر و سریع‌تر تجربه کنید.
            </h2>
            <p>اسنپ! به شما کمک میکنه ساده‌تر سفر کنید، غذا سفارش دهید و خرید کنید، جابجا بشید و …</p>
            <Image
                src="/components/landing.png"
                alt=""
                width={500}
                height={200}
            />
        </div>
          <h2>یک اپلیکیشن، برای تمام نیاز‌ها</h2>
        <div className={styles.vendors}>
          {data.map(obj=><p key={obj.title} className={styles.vechorCard}>
            <h3>{obj.title}</h3>
            <span>{obj.body}</span>
          </p>)}
        </div>
        </main>

      <footer className={styles.footer}>
        <a
          href="/"
        >
          Home page
        </a>
      </footer>
    </div>
    )
}

export default Landing
