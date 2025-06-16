// src/components/CreatorPage.jsx
import React, { useState } from "react";
import Navbar from "./Navbar";
import CreatorHeader from "./CreatorHeader";
import SummarySection from "./SummarySection";
import ConversationSection from "./ConversationSection";

export default function CreatorPage() {
  const [activeTab, setActiveTab] = useState("summary"); // Tabs: summary or conversation
  const [selectedQuestion, setSelectedQuestion] = useState(null); // Which question was clicked

  const handleQuestionClick = (question) => {
    setSelectedQuestion(question);
    setActiveTab("conversation"); // Switch to conversation tab when a question is selected
  };

  return (
    <div className="creator-page">
      <Navbar />

      <CreatorHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {activeTab === "summary" && (
        <SummarySection onQuestionClick={handleQuestionClick} />
      )}

      {activeTab === "conversation" && (
        <ConversationSection
          selectedQuestion={selectedQuestion}
          onQuestionClick={setSelectedQuestion}
        />
      )}
    </div>
  );
}
