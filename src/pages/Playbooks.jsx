import playbooks from "../data/playbooks";

function Playbooks() {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Playbooks</h1>

      {playbooks.map((pb, index) => (
        <div key={index} style={styles.card}>
          <h2>{pb.title}</h2>

          <div style={styles.grid}>
            
            <div style={styles.box}>
              <h3>Use Microservices when</h3>
              <ul>
                {pb.microservices.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div style={styles.box}>
              <h3>Use Monolith when</h3>
              <ul>
                {pb.monolith.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

          </div>

          <div style={styles.insight}>
            <strong>Key Insight:</strong> {pb.insight}
          </div>
        </div>
      ))}
    </div>
  );
}

const styles = {
  page: {
    padding: "40px",
  },

  title: {
    marginBottom: "30px",
  },

  card: {
    background: "white",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.05)",
    marginBottom: "30px",
  },

  grid: {
    display: "flex",
    gap: "20px",
    marginTop: "20px",
    flexWrap: "wrap",
  },

  box: {
    flex: "1",
    minWidth: "250px",
    background: "#f3f4f6",
    padding: "20px",
    borderRadius: "10px",
  },

  insight: {
    marginTop: "20px",
    padding: "15px",
    background: "#e0f2fe",
    borderRadius: "8px",
  },
};

export default Playbooks; 