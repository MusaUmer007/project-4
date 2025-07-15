import React, { useState } from "react";

function PigGame() {
  const [score, setScore] = useState(0);
  const [roll, setRoll] = useState(1);

  const rollDice = () => {
    const r = Math.floor(Math.random() * 6) + 1;
    setRoll(r);
    if (r !== 1) setScore(score + r);
    else setScore(0);
  };

  const hold = () => {
    alert(`You held with a score of ${score}!`);
    setScore(0);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px", background: "#f9f9f9", borderRadius: "10px" }}>
      <h3>🐷 Pig Game</h3>
      <p>Dice Roll: {roll}</p>
      <p>Score: {score}</p>
      <button onClick={rollDice} style={{ marginRight: "10px" }}>Roll Dice</button>
      <button onClick={hold}>Hold</button>
    </div>
  );
}

export default PigGame;
