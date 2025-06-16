// src/components/ConversationSection.jsx
import React, { useState, useEffect } from "react";
import "../styles/ConversationSection.css";

const allQuestions = {
  personal: [
    { id: 1, text: "Who are you, and what do you do?", time: "(00:06)", video: "/video1.mp4" },
    { id: 2, text: "Describe yourself in 3-words", time: "(00:08)", video: "/video2.mp4" },
  ],
  content: [
    { id: 3, text: "What kind of content do you create?", time: "(00:05)", video: "/video3.mp4" },
    { id: 4, text: "What makes your content unique?", time: "(00:07)", video: "/video4.mp4" },
  ],
  mental: [
    { id: 5, text: "How do you deal with burnout?", time: "(00:06)", video: "/video5.mp4" },
  ]
};

const categoryNames = {
  personal: "Personal",
  content: "Creator Content Type",
  mental: "Mental Health",
};

export default function ConversationSection({ selectedQuestion, onQuestionClick }) {
  const [activeCategory, setActiveCategory] = useState("personal");

  useEffect(() => {
    if (selectedQuestion) {
      for (const cat in allQuestions) {
        if (allQuestions[cat].find((q) => q.id === selectedQuestion.id)) {
          setActiveCategory(cat);
          break;
        }
      }
    }
  }, [selectedQuestion]);

  return (
    <div className="summary-section">
      <div className="summary-left">
        {selectedQuestion ? (
          <video
            key={selectedQuestion.video}
            src={selectedQuestion.video}
            autoPlay
            muted
            controls
            className="summary-video"
          ></video>
        ) : (
          <video
            src="/video1.mp4"
            autoPlay
            muted
            controls
            className="summary-video"
          ></video>
        )}
      </div>

      <div className="summary-right">
        <div className="summary-questions" style={{ border: "1px solid #333", borderRadius: "15px", overflow: "hidden" }}>
          {Object.keys(categoryNames).map((cat, index) => (
            <div
              key={cat}
              style={{
                backgroundColor: "#1f1f1f",
                padding: "1rem",
                borderBottom: index < Object.keys(categoryNames).length - 1 ? "1px solid #333" : "none"
              }}
            >
              <h3
                onClick={() => setActiveCategory(cat)}
                style={{
                  color: "#00e58c",
                  marginBottom: "1rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}
              >
                <span>{categoryNames[cat]} ({allQuestions[cat].length})</span>
                <span style={{ transform: activeCategory === cat ? "rotate(90deg)" : "rotate(0deg)", transition: "0.2s" }}>▶</span>
              </h3>

              {activeCategory === cat && (
                allQuestions[cat].map((q) => (
                  <div
                    key={q.id}
                    className={`summary-question-item ${selectedQuestion?.id === q.id ? "selected" : ""}`}
                    onClick={() => onQuestionClick(q)}
                    style={{
                      backgroundColor: selectedQuestion?.id === q.id ? "#f2f2f2" : "#2e2e2e",
                      color: selectedQuestion?.id === q.id ? "#000" : "#fff",
                      padding: "0.8rem 1.2rem",
                      borderRadius: "999px",
                      marginBottom: "10px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      cursor: "pointer"
                    }}
                  >
                    <div className="question-left">
                      <span className="question-icon">▶</span>
                      {q.text}
                    </div>
                    <div className="timestamp">{q.time}</div>
                  </div>
                ))
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
