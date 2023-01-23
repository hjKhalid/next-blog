import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'


const Navbar = () => {
  return (
    <div>

<nav className="navbar">
        <ul className={styles.navbar}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/contact">contact Us</Link>
          </li>
          <li>
            <Link href="/blogpost">Blog Post</Link>
          </li>

        </ul>
      </nav>
     
    </div>
  )
}

export default Navbar
