import React from "react";
import { creators } from "../data/creators";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="container">
      <h1>Meet the Creators</h1>
      {Object.values(creators).map((creator) => (
        <Link to={`/creator/${creator.id}`} key={creator.id} className="creator-card">
          <img src={creator.avatarUrl} alt={creator.name} className="creator-img" />
          <div className="creator-info">
            <h3>{creator.name}</h3>
            <p>{creator.team}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
