// src/pages/CreatorPage.jsx
import React, { useState } from "react";
import ConversationSection from "../components/ConversationSection";
import SummarySection from "../components/SummarySection";
import TranscriptSection from "../components/TranscriptSection";
import CreatorHeader from "../components/CreatorHeader";
import "../styles/CreatorPage.css";
import { creators } from "../data/creators";
import { motion, AnimatePresence } from "framer-motion";

export default function CreatorPage() {
  const [activeTab, setActiveTab] = useState("Summary");
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const creator = {
    name: "Pierre Gasly",
    image: "/creator.jpg", // Image must be in public folder
    id: "41926",
  };

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
          <motion.div
            key="summary"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <SummarySection
              onQuestionClick={handleQuestionClick}
              selectedId={selectedQuestion?.id}
              creatorId={creator.id}
            />
          </motion.div>
        )}
        {activeTab === "Conversation" && (
          <motion.div
            key="conversation"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <ConversationSection
              selectedQuestion={selectedQuestion}
              onQuestionClick={handleQuestionClick}
            />
          </motion.div>
        )}
        {activeTab === "Transcripts" && <TranscriptSection />}

      </div>
    </div>
  );
}
