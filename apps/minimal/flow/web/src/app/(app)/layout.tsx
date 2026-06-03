
export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={styles.shell}>
      
      {/* Sidebar (optional später) */}
      <aside style={styles.sidebar}>
        <h2>MinimalFlow</h2>
        <nav>
          <p>Tasks</p>
          <p>Projects</p>
          <p>Settings</p>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={styles.main}>
        {children}
      </main>

    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  shell: {
    display: "flex",
    minHeight: "100vh",
  },

  sidebar: {
    width: "220px",
    padding: "20px",
    borderRight: "1px solid #222",
  },

  main: {
    flex: 1,
    padding: "24px",
  },
};