import heroImage from "../assets/hero.png";
function Home() {
  return (
    <div style={styles.page}>

      {/* HERO SECTION */}
      <section style={styles.hero}>
        <div style={styles.heroText}>
          <h1 style={styles.title}>FirstQlik</h1>
          <p style={styles.subtitle}>
            Making technology decisions simple in a complex AI-driven world
          </p>
          <p style={styles.tagline}>
            Insights • Playbooks • Practical Thinking
          </p>
        </div>

        <div style={styles.heroImage}>
          <img
            src="{heroImage} style={styles.image}"
            alt="AI concept"
            style={{ width: "100%", borderRadius: "12px" }}
          />
        </div>
      </section>

      {/* SECTION 2 */}
      <section style={styles.section}>
        <h2>What is FirstQlik?</h2>
        <p>
          A platform designed to help architects, engineers, and leaders make
          better technology decisions with clarity and confidence.
        </p>
      </section>

      {/* SECTION 3 */}
      <section style={styles.cards}>
        <div style={styles.card}>
          <h3>Insights</h3>
          <p>Learn from real-world architecture and AI experiences.</p>
        </div>

        <div style={styles.card}>
          <h3>Playbooks</h3>
          <p>Structured decision frameworks for modern technology choices.</p>
        </div>

        <div style={styles.card}>
          <h3>Leadership</h3>
          <p>Thoughts on leading engineering teams and transformation.</p>
        </div>
      </section>

    </div>
  );
}

const styles = {
  page: {
    fontFamily: "Inter, sans-serif",
    background: "#f9fafb",
    color: "#111827",
  },

  hero: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "100px 60px",
    gap: "50px",
    flexWrap: "wrap",
  },

  heroText: {
    maxWidth: "500px",
  },

  title: {
    fontSize: "52px",
    fontWeight: "700",
    marginBottom: "10px",
  },

  subtitle: {
    fontSize: "20px",
    color: "#4b5563",
    marginBottom: "15px",
  },
  
  buttons: {
  display: "flex",
  gap: "15px",
 },
 
 primaryBtn: {
  background: "#2563eb",
  color: "white",
  padding: "12px 20px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
},

secondaryBtn: {
  background: "white",
  color: "#2563eb",
  padding: "12px 20px",
  border: "1px solid #2563eb",
  borderRadius: "8px",
  cursor: "pointer",
},
 
  highlight: {
  fontSize: "16px",
  color: "#6b7280",
  marginBottom: "25px",
  },
  tagline: {
    marginTop: "10px",
    color: "#2563eb",
    fontWeight: "600",
  },

  heroImage: {
    maxWidth: "400px",
  },

  section: {
    padding: "60px 40px",
    textAlign: "center",
  },

  cards: {
    display: "flex",
    gap: "20px",
    padding: "40px",
    justifyContent: "center",
    flexWrap: "wrap",
  },

  card: {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    width: "250px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
  },
};

export default Home;