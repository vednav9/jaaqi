import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SummarySection.css";

const questions = [
  { id: 1, text: "Who are you, and what do you do?", time: "(00:06)", video: "/video1.mp4" },
  { id: 2, text: "Describe yourself in 3-words", time: "(00:12)", video: "/video2.mp4" },
  { id: 3, text: "Did you like school?", time: "(01:03)", video: "/video3.mp4" },
  { id: 4, text: "Who was your favourite teacher and why?", time: "(01:24)", video: "/video4.mp4" },
  { id: 5, text: "What parts of school did you dislike?", time: "(01:31)", video: "/video5.mp4" },
];

export default function SummarySection({ onQuestionClick, selectedId, creatorId }) {
  const navigate = useNavigate();

  const handleClick = (q) => {
    onQuestionClick(q);
    navigate(`/creator/${creatorId}`);
  };

  const selectedVideo = selectedId
    ? questions.find((q) => q.id === selectedId)?.video
    : questions[0].video;

  return (
    <div className="summary-container">
      <div className="summary-video-section">
        <video
          src={selectedVideo}
          autoPlay
          muted
          controls
          className="summary-video"
        />
      </div>
      <div className="summary-questions-section">
        <div className="summary-title">Select an answer to get started</div>
        <div className="summary-question-list">
          {questions.map((q) => (
            <div
              key={q.id}
              className="summary-question-item"
              onClick={() => handleClick(q)}
            >
              <span>
                <span className="summary-question-icon">▶</span>
                {q.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
