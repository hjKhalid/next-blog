import React from 'react'
// import styles from '../styles/blogpost.module.css'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'

const hello = () => {
  return (
    <div>
      <h1> </h1>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href=''>Blog post</a>
        </h1>

        <div className={styles.grid}>
          <a href='' className={styles.card}>
          <Link href='blog/python'>
            <h2>code with python pages </h2></Link>
           <p>it's very easy to learn </p>
          </a>

          <a href='' className={styles.card}>
          <Link href='blog/java'>
            <h2>Code with Java</h2></Link>
            <p>it is very good OOPS programming!</p>
          </a>

          <a href='' className={styles.card}>
          <Link href='blog/HTML&CSS'>
          
            <h2>HTML and CSS</h2></Link>
            <p>you can very easly can design </p>
          </a>

          <a
            href=''
            target='_blank'
            rel='noopener noreferrer'
            className={styles.card}
          >
          <Link href='blog/javascript'>
            <h2>Javascript</h2></Link>
            <p>it's is the language of web</p>
          </a>
        </div>
      </main>
    </div>
  )
}

export default hello
