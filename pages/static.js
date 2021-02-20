import Head from 'next/head'
import Landing from '../components/landing'
import styles from '../styles/Home.module.css'

export default function Home({ data = []}) {
  return (
    <Landing data={data}/>
)
}

export async function getStaticProps(context) {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts').then(r=>r.json())
  return {
    props: {data}, // will be passed to the page component as props
  }
}