// src/components/TranscriptSection.jsx
import React from "react";
import "../styles/TranscriptSection.css";

const transcriptData = [
  {
    question: "Who are you, and what do you do?",
    answer: "I am Pierre Gasly. I'm a Formula One driver for BWT Alpine F1 team.",
  },
  {
    question: "Describe yourself in 3‑words",
    answer: "Genuine, competitive, rapid.",
  },
  {
    question: "What got you into karting and racing?",
    answer: "My family inspired me – I started karting at 6 years old.",
  },
  {
    question: "What goes through your mind when taking a corner at max speed?",
    answer: "Complete focus. You trust your instincts and the car.",
  },
  {
    question: "I want to be a sportsperson, is school a waste of time?",
    answer: "School builds your foundation. It’s important, even as an athlete.",
  },
];

export default function TranscriptSection() {
  return (
    <div className="transcript-container">
      {transcriptData.map((item, index) => (
        <div className="transcript-card" key={index}>
          <div className="transcript-question">Q: {item.question}</div>
          <div className="transcript-answer">A: {item.answer}</div>
        </div>
      ))}
    </div>
  );
}
