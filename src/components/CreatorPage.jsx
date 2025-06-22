// src/components/CreatorPage.jsx
import React, { useState } from "react";
import CreatorHeader from "./CreatorHeader";
import SummarySection from "./SummarySection";
import ConversationSection from "./ConversationSection";

export default function CreatorPage() {
  const [activeTab, setActiveTab] = useState("Summary");
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const creator = {
    name: "Pierre Gasly",
    image: "/creator.jpg", // Ensure this image exists in the public folder
  };

  return (
    <div>
      <CreatorHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        creator={creator}
      />

      {activeTab === "Summary" && (
        <SummarySection
          onQuestionClick={(q) => {
            setSelectedQuestion(q);
            setActiveTab("Conversation");
          }}
        />
      )}

      {activeTab === "Conversation" && (
        <ConversationSection selectedQuestion={selectedQuestion} />
      )}

      {activeTab === "Transcripts" && (
        <div style={{ padding: "2rem", color: "white" }}>
          Transcripts coming soon...
        </div>
      )}
    </div>
  );
}
