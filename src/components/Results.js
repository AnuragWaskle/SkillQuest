import React, { useEffect } from 'react';

function Results({ score, setStage, setScore }) {
  useEffect(() => {
    localStorage.setItem('lastScore', score);
  }, [score]);

  const reset = () => {
    setScore(0);
    setStage('categories');
  };

  return (
    <div>
      <div className="trophy">🏆</div>
      <h2>Your Score: {score}/5</h2>
      <button onClick={reset}>Retry</button>
    </div>
  );
}

export default Results;