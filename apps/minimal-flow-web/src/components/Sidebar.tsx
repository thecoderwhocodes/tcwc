"use client";

import React from 'react'
import styles from '../styles/Sidebar.module.css'
import Link from 'next/link'

import { usePathname } from "next/navigation";

const links = [
  { href: "/home", label: "Home" }
];

const authLinks = [
    { href: "/settings", label: "Einstellungen" },
    { href: "/account", label: "Account" },
]

export default function Sidebar() {
    const pathname = usePathname();
    const isActive = (href: string) => {
        return pathname === href || pathname.startsWith(href + "/");
    };
  return (
    <aside className={styles.sidebar}>
        <div className={styles.sidebarChild}>
            <Link href={'/'} className={styles.logo}>MINIMALFlow</Link>
        </div>
        <div className={styles.sidebarChild}>
            <nav className={styles.nav}>
                {links.map((link) => {
                    const active = isActive(link.href);

                    return (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`${styles.navLink} ${
                        active ? styles.active : ""
                        }`}
                    >
                        {link.label}
                    </Link>
                    );
                })}
            </nav>
        </div>
        <div className={styles.sidebarChild}>
            <nav className={styles.nav}>
                {authLinks.map((link) => {
                    const active = isActive(link.href);

                    return (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`${styles.navLink} ${
                        active ? styles.active : ""
                        }`}
                    >
                        {link.label}
                    </Link>
                    );
                })}
            </nav>
        </div>
    </aside>
  )
}
