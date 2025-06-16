import React from "react";
import { Link } from "react-router-dom";

export default function CreatorCard({ creator }) {
  return (
    <Link to={`/creator/${creator.id}`} style={styles.link}>
      <div style={styles.card}>
        <img src={creator.avatarUrl} alt={creator.name} style={styles.img}/>
        <div>
          <h3 style={styles.name}>{creator.name}</h3>
          <p style={styles.team}>{creator.team}</p>
        </div>
      </div>
    </Link>
  );
}

const styles = {
  link: { textDecoration: "none", color: "inherit" },
  card: { display: "flex", alignItems: "center", marginBottom: 15, border: "1px solid #ddd", padding: 10, borderRadius: 8 },
  img: { width: 60, height: 60, borderRadius: "50%", marginRight: 15 },
  name: { margin: 0, fontSize: "1.1rem" },
  team: { margin: 0, color: "#555" }
};
