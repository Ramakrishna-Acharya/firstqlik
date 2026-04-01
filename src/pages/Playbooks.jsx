function Playbooks() {
  return (
    <div>
      <h1>Playbooks</h1>

      <h2>Microservices vs Monolith</h2>

      <p><strong>Use Microservices when:</strong></p>
      <ul>
        <li>System is large and complex</li>
        <li>Teams are independent</li>
        <li>Need for scalability</li>
      </ul>

      <p><strong>Use Monolith when:</strong></p>
      <ul>
        <li>Small team</li>
        <li>Simple application</li>
        <li>Speed of development is critical</li>
      </ul>

      <p>
        <strong>Key Insight:</strong> Microservices are not a default choice.
        They are an advanced solution for specific problems.
      </p>
    </div>
  );
}

export default Playbooks;