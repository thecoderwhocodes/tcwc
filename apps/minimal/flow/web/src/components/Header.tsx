import React from 'react'
import styles from '../styles/Header.module.css'
import Link from 'next/link'
import { FaGithub } from "react-icons/fa";


export default function Header() {
  return (
    <div className={styles.header}>
        <div className={styles.headerChild}>
            <Link href={'/'} className={styles.logo}>MINIMALFlow</Link>
        </div>
        <div className={styles.headerChild}>
            <Link target='_blank' href={'https://github.com/thecoderwhocodes/tcwc/tree/main/apps/minimal/flow'}><FaGithub size={32} className={styles.githubIcon}/></Link>
        </div>
        <div className={styles.headerChild}>
            <Link href={'/signup'} className={styles.signupButton}>Registrieren</Link>
            <Link href={'/login'} className={styles.loginButton}>Anmelden</Link>
        </div>
    </div>
  )
}
