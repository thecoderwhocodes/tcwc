import React from 'react'
import AppPageHeader from '../../../components/AppPageHeader'
import AppPageContent from '../../../components/AppPageContent'
import styles from "../../../styles/accountPage.module.css"
import { createServerClient } from "../../../../../../packages/supabase/server";
import { cookies } from "next/headers";
import ProfileClient from '../../../components/ProfileClient';

export default async function page() {
  const supabase = createServerClient();

  const { data: { user } } = await supabase.auth.getUser();
  return (
    <div className="appPageContainer">
      <AppPageHeader title="Account">
        <button>Neu</button>
      </AppPageHeader>

      <AppPageContent>
        <div className="devidedContent">
          <section className={styles.section}>
            <h2>Persönliche Informationen</h2>
            <form action="">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </form>
          </section>
          <section className={styles.section}>
            <h2>Anmeldung und Sicherheit</h2>
            <form action="">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
              <label htmlFor="telephone">Telefonnummer</label>
              <input type="tel" name="telephone" id="telephone" />
            </form>
          </section>
        </div>
        <ProfileClient user={user} />
      </AppPageContent>
    </div>
  )
}
