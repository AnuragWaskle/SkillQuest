import React from 'react';

function Quiz({ questions, currentQuestion, setCurrentQuestion, score, setScore, setStage }) {
  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const checkAnswer = (selected) => {
    if (selected === question.correct_answer) setScore(score + 1);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setStage('loading');
    }
  };

  // Combine correct and incorrect answers, then shuffle
  const allAnswers = [...question.incorrect_answers, question.correct_answer].sort(() => Math.random() - 0.5);

  return (
    <div className="quiz-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      <h2 dangerouslySetInnerHTML={{ __html: question.question }} />
      <div className="quiz-options">
        {allAnswers.map((ans, index) => (
          <button
            key={index}
            className="quiz-option"
            onClick={() => checkAnswer(ans)}
            dangerouslySetInnerHTML={{ __html: ans }}
          />
        ))}
      </div>
    </div>
  );
}

export default Quiz;