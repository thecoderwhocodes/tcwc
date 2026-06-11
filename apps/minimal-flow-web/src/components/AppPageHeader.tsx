import React from 'react'
import styles from '../styles/AppPageHeader.module.css'

type AppPageHeaderProps = {
  title: string;
  children?: React.ReactNode;
};

export default function AppPageHeader({ title, children }: AppPageHeaderProps) {
  return (
    <div className={styles.appPageHeader}>
      <div>
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  );
}
