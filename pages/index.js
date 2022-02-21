import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Project Manager</title>
        <meta name="description" content="A project management tool" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Dashboard
        </h1>

        
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
