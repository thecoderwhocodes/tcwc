import Sidebar from "../../components/Sidebar";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={styles.shell}>
      
      {/* Sidebar (optional später) */}
      <Sidebar />

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

  main: {
    width: "90%"
  },
};