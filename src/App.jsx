import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Insights from "./pages/Insights";
import Playbooks from "./pages/Playbooks";

function App() {
  return (
    <div style={styles.page}>
      
      {/* HEADER */}
      <header style={styles.header}>
        <h1 style={styles.title}>FirstQlik</h1>
        <p style={styles.subtitle}>
          Your first stop for practical technology decisions in the AI era
        </p>
      </header>

      {/* NAV */}
      <nav style={styles.nav}>
        <Link style={styles.link} to="/">Home</Link>
        <Link style={styles.link} to="/insights">Insights</Link>
        <Link style={styles.link} to="/playbooks">Playbooks</Link>
        <Link style={styles.link} to="/about">About</Link>
      </nav>

      {/* ROUTES */}
      <div style={styles.container}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/playbooks" element={<Playbooks />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

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
    padding: "60px 20px",
    background: "radial-gradient(circle at top, #1a2238, #0b0f19)",
  },
  title: {
    fontSize: "40px",
  },
  subtitle: {
    fontSize: "16px",
    color: "#a9b4c0",
  },
  nav: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    padding: "18px",
    background: "#11182a",
    borderBottom: "1px solid #1f2a44",
  },
  container: {
    maxWidth: "1000px",
    margin: "auto",
    padding: "60px 20px",
  },
  link: {
  color: "#cbd5e1",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: "500",
 },
};

export default App;