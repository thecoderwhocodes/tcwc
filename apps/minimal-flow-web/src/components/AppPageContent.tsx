import React from 'react'
import styles from '../styles/AppPageContent.module.css'

type AppPageContentProps = {
  children?: React.ReactNode;
};

export default function AppPageContent({ children }: AppPageContentProps) {
  return (
    <div className={styles.appPageContent}>
      {children}
    </div>
  );
}
