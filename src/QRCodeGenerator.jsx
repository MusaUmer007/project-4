import React, { useState } from "react";
import QRCode from "react-qr-code";

function QRCodeGenerator() {
  const [text, setText] = useState("");

  return (
    <section style={{ margin: "40px 0", textAlign: "center" }}>
      <h2>🔳 QR Code Generator</h2>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text here"
        style={{
          padding: "10px",
          fontSize: "16px",
          width: "300px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />

      <div style={{ marginTop: "20px", display: "inline-block", background: "white", padding: "10px" }}>
        {text && <QRCode value={text} size={128} />}
      </div>
    </section>
  );
}

export default QRCodeGenerator;


