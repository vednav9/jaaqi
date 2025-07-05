// src/components/ConversationSection.jsx
import React, { useState, useEffect } from "react";
import "../styles/ConversationSection.css";

// Static categories with questions
const allQuestions = {
  personal: [
    { id: 1, text: "Who are you, and what do you do?", time: "(00:06)", video: "/video1.mp4" },
    { id: 2, text: "Describe yourself in 3-words", time: "(00:12)", video: "/video2.mp4" },
    { id: 3, text: "Did you like school?", time: "(01:03)", video: "/video3.mp4" },
    { id: 4, text: "Who was your favourite teacher and why?", time: "(01:24)", video: "/video4.mp4" },
    { id: 5, text: "What parts of school did you dislike?", time: "(01:31)", video: "/video5.mp4" }
  ],
  content: [
    { id: 6, text: "What kind of content do you create?", time: "(00:15)", video: "/video6.mp4" },
    { id: 7, text: "What makes your content unique?", time: "(00:19)", video: "/video7.mp4" }
  ],
  mental: [
    { id: 8, text: "How do you deal with burnout?", time: "(00:22)", video: "/video8.mp4" }
  ]
};

const categoryNames = {
  personal: "Personal",
  content: "Content",
  mental: "Mental Health"
};

export default function ConversationSection({ selectedQuestion, onQuestionClick }) {
  const [openCategories, setOpenCategories] = useState({
    personal: true,
    content: false,
    mental: false
  });

  const toggleCategory = (cat) => {
    setOpenCategories((prev) => ({ ...prev, [cat]: !prev[cat] }));
  };

  return (
    <div className="conversation-container">
      <div className="conversation-video-section">
        <video
          key={selectedQuestion?.video || "default"}
          src={selectedQuestion?.video || "/video1.mp4"}
          autoPlay
          muted
          controls
          className="conversation-video"
        />
      </div>

      <div className="conversation-questions-section">
        {Object.keys(categoryNames).map((cat, index) => (
          <div key={cat} className="conversation-category">
            <div className="conversation-category-header" onClick={() => toggleCategory(cat)}>
              <span
                className="triangle-icon"
                style={{
                  transform: openCategories[cat] ? "rotate(90deg)" : "rotate(0deg)"
                }}
              >
                ▶
              </span>
              <span className="category-title">{categoryNames[cat]}</span>
              <span className="question-count">{allQuestions[cat].length}</span>
            </div>

            {openCategories[cat] && (
              <div className="conversation-question-list">
                {allQuestions[cat].map((q) => (
                  <div
                    key={q.id}
                    className={`conversation-question-item ${selectedQuestion?.id === q.id ? "selected" : ""}`}
                    onClick={() => onQuestionClick(q)}
                  >
                    <span className="question-icon">▶</span>
                    <span className="question-text">{q.text}</span>
                    <span className="question-time">{q.time}</span>
                  </div>
                ))}
              </div>
            )}
            {index < Object.keys(categoryNames).length - 1 && <hr className="category-divider" />}
          </div>
        ))}
      </div>
    </div>
  );
}
