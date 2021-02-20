import Head from 'next/head'
import styles from '../styles/Home.module.css'
import useSWR from 'swr'
import Landing from '../components/landing'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Home() {
  const { data =[], error } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)
  
  return (
      <Landing data={data}/>
  )
}

export async function getStaticProps(context) {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts').then(r=>r.json())
  return {
    props: {}, // will be passed to the page component as props
  }
}