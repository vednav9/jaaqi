  import React from "react";
  import "../styles/SummarySection.css";

  const questions = [
    { id: 1, text: "Who are you, and what do you do?", video: "/video1.mp4" },
    { id: 2, text: "Describe yourself in 3-words", video: "/video2.mp4" },
    { id: 3, text: "What kind of content do you create?", video: "/video3.mp4" },
    { id: 4, text: "What makes your content unique?", video: "/video4.mp4" },
    { id: 5, text: "How do you deal with burnout?", video: "/video5.mp4" },
  ];

  export default function SummarySection({ onQuestionClick }) {
    return (
      <div className="summary-section">
        <div className="summary-left">
          <video
            src="/video1.mp4"
            autoPlay
            muted
            controls
            className="summary-video"
          ></video>
        </div>
        <div className="summary-right">
          <div className="summary-instruction">
            Select a question to get started
          </div>
          <div className="summary-questions">
            {questions.slice(0, 5).map((q) => (
              <div
                key={q.id}
                className="summary-question-item"
                onClick={() => onQuestionClick(q)}
              >
                <span className="question-icon">▶</span>
                {q.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
