import React, { useState } from "react";

function ModalBasic() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ marginBottom: "40px" }}>
      <button onClick={() => setIsOpen(true)} style={{ padding: "10px 20px" }}>
        Open Modal
      </button>

      {isOpen && (
        <div style={{
          position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
          background: "rgba(0,0,0,0.5)", display: "flex",
          justifyContent: "center", alignItems: "center"
        }}>
          <div style={{ background: "#fff", padding: "20px", borderRadius: "8px" }}>
            <h3>Wellcome</h3>
            <p>how are you sir?</p>
            <button onClick={() => setIsOpen(false)} style={{ marginTop: "10px" }}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalBasic;
