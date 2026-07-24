import React from "react";
import styles from "../styles/Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.container}>
      <div>
        <Link href={"/"} className={styles.logo}>
          KENNDEINENSTOFF
        </Link>
      </div>
      <div>
        <Link href={"/substances"} className={styles.navLink}>
          Substanzkatalog
        </Link>
        <Link href={"/knowledge"} className={styles.navLink}>
          Wissen
        </Link>
      </div>
      <div>
        <Link href={"/get-help"} className={styles.helpBtn}>
          Hilfe erhalten
        </Link>
      </div>
    </div>
  );
}
