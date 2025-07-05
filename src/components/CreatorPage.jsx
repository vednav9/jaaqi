// src/pages/CreatorPage.jsx
import React, { useState } from "react";
import ConversationSection from "../components/ConversationSection";
import SummarySection from "../components/SummarySection";
import TranscriptSection from "../components/TranscriptSection";
import CreatorHeader from "../components/CreatorHeader";
import "../styles/CreatorPage.css";
import { creators } from "../data/creators";

export default function CreatorPage() {
  const [activeTab, setActiveTab] = useState("Summary");
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const creator = creators["41926"];

  const handleQuestionClick = (q) => {
    setSelectedQuestion(q);
    setActiveTab("Conversation");
  };

  return (
    <div className="page-wrapper">
      <CreatorHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        creator={creator}
      />


      <div className="content-section">
        {activeTab === "Summary" && (
          <SummarySection
            onQuestionClick={handleQuestionClick}
            selectedId={selectedQuestion?.id}
            creatorId={creator.id}
          />
        )}
        {activeTab === "Conversation" && (
          <ConversationSection
            selectedQuestion={selectedQuestion}
            onQuestionClick={handleQuestionClick}
          />
        )}
        {activeTab === "Transcripts" && (
          <TranscriptSection />
        )}

      </div>
    </div>
  );
}
