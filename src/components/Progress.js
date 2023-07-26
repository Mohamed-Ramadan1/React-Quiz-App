import React from "react";

function Progress({ index, numQuestion, answer, points, maxPossiblePoints }) {
  return (
    <header className="progress">
      <progress max={numQuestion} value={index + Number(answer !== null)} />

      <p>
        Question <strong>{index + 1}</strong> / {numQuestion}
      </p>

      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
