// src/components/CreatorHeader.jsx
import React from "react";
import "../styles/CreatorHeader.css";
import { FiShare2 } from "react-icons/fi";

export default function CreatorHeader({ activeTab, setActiveTab, creator }) {
  const { name = "Unknown Creator", image = "/TS.png" } = creator || {};

  return (
    <div className="creator-header">
      <div className="creator-left">
        <img src={image} alt={name} className="creator-image" />
        <h1 className="creator-name">{name.toUpperCase()}</h1>
      </div>

      <div className="creator-tabs">
        {['Summary', 'Conversation', 'Transcripts'].map((tab) => (
          <div
            key={tab}
            className={`creator-tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
        <FiShare2 className="share-icon" />
      </div>
    </div>
  );
}
