// src/components/CreatorHeader.jsx
import React from "react";
import "../styles/CreatorHeader.css";

export default function CreatorHeader({ activeTab, setActiveTab }) {
  return (
    <div className="creator-header">
      <div className="creator-left">
        <img src="/TS.png" alt="creator" className="creator-img" />
        <div className="creator-name">VEDANT NAVTHALE</div>
      </div>

      <div className="creator-right">
        <button
          className={`tab-button ${activeTab === "summary" ? "active" : ""}`}
          onClick={() => setActiveTab("summary")}
        >
          Summary
        </button>
        <button
          className={`tab-button ${activeTab === "conversation" ? "active" : ""}`}
          onClick={() => setActiveTab("conversation")}
        >
          Conversations
        </button>
        <button className="tab-button send-icon">📤</button>
      </div>
    </div>
  );
}
