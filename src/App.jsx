import React, { useState } from "react";
import ModalBasic from "./ModalBasic.jsx";
import ProgressBar from "./ProgressBar.jsx";
import PigGame from "./PigGame.jsx";
import QuizApp from "./quiz.jsx";
import QRCode from "react-qr-code";

function App() {
  const [qrText, setQrText] = useState("");

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "50px" }}>
        🎯 Project 4 – Modal, Progress Bar, Pig Game, Quiz, QR Code
      </h1>

      <ModalBasic />
      <ProgressBar />
      <PigGame />
      <QuizApp />

      {/* 🔳 QR Code Generator */}
      <section style={{ margin: "40px 0", textAlign: "center" }}>
        <h2>🔳 QR Code Generator</h2>

        <input
          type="text"
          value={qrText}
          onChange={(e) => setQrText(e.target.value)}
          placeholder="Enter text here"
          style={{
            padding: "10px",
            fontSize: "16px",
            width: "300px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />

        <div
          style={{
            marginTop: "20px",
            display: "inline-block",
            background: "white",
            padding: "10px",
          }}
        >
          {qrText && <QRCode value={qrText} size={128} />}
        </div>
      </section>
    </div>
  );
}

export default App;

