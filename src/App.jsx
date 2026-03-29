function App() {
  return (
    <div style={styles.page}>
      
      {/* HEADER */}
      <header style={styles.header}>
        <h1 style={styles.title}>FirstQlik</h1>
        <p style={styles.subtitle}>
          Your first stop for practical technology decisions in the AI era
        </p>
        <span style={styles.tag}>Architects • Leaders • Decision Makers</span>
      </header>

      {/* NAV */}
      <nav style={styles.nav}>
        <a href="#">Home</a>
        <a href="#">Insights</a>
        <a href="#">Playbooks</a>
        <a href="#">About</a>
      </nav>

      {/* MAIN CONTENT */}
      <div style={styles.container}>

        <Card title="What is FirstQlik">
          A thinking platform for technology leaders navigating architecture,
          AI adoption, and complex engineering decisions.
        </Card>

        <Card title="Purpose">
          To simplify technology choices and bring clarity to engineering
          and architecture decisions in real-world environments.
        </Card>

        <Card title="Insights">
          AI in enterprise systems, cloud architecture patterns,
          security thinking, and leadership perspectives.
        </Card>

        <Card title="Playbooks (Coming Soon)">
          Decision frameworks: when to use what technology, how to design systems,
          and how to think like an architect.
        </Card>

        <Card title="About">
          A technology leader with 20+ years of experience across engineering,
          architecture, and transformation programs.
        </Card>

      </div>

      {/* FOOTER */}
      <footer style={styles.footer}>
        © 2026 FirstQlik — Built for thinkers, architects, and leaders
      </footer>

    </div>
  );
}

function Card({ title, children }) {
  return (
    <div style={styles.card}>
      <h2 style={styles.cardTitle}>{title}</h2>
      <p style={styles.cardText}>{children}</p>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "Inter, sans-serif",
    background: "#0b0f19",
    color: "#e8ecf1",
    minHeight: "100vh",
  },
  header: {
    textAlign: "center",
    padding: "80px 20px 40px",
    background: "radial-gradient(circle at top, #1a2238, #0b0f19)",
  },
  title: {
    fontSize: "48px",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "18px",
    color: "#a9b4c0",
  },
  tag: {
    display: "inline-block",
    marginTop: "12px",
    padding: "6px 12px",
    background: "#1f2a44",
    borderRadius: "20px",
    fontSize: "12px",
    color: "#93c5fd",
  },
  nav: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "15px",
    background: "#11182a",
  },
  container: {
    maxWidth: "1000px",
    margin: "auto",
    padding: "40px 20px",
  },
  card: {
    background: "#121a2b",
    padding: "20px",
    borderRadius: "14px",
    marginBottom: "20px",
    border: "1px solid #1f2a44",
  },
  cardTitle: {
    marginBottom: "10px",
  },
  cardText: {
    color: "#b8c2cc",
  },
  footer: {
    textAlign: "center",
    padding: "40px",
    fontSize: "13px",
    color: "#6b7280",
  },
};

export default App;