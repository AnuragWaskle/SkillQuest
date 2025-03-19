import React, { useState, useEffect } from 'react';
import './App.css';
import Categories from './components/Categories';
import Quiz from './components/Quiz';
import Results from './components/Results';

function App() {
  const [stage, setStage] = useState('categories');
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (stage === 'loading') {
      const timer = setTimeout(() => setStage('results'), 2000);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  return (
    <div className="App">
      <div className="bubble-background">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="bubble" style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${5 + Math.random() * 10}s`,
            width: Math.random() > 0.5 ? '20px' : '10px',
            height: Math.random() > 0.5 ? '20px' : '10px'
          }}></div>
        ))}
      </div>
      <h1>SkillQuest</h1>
      <p className="subtitle">Test Your Skills, Master Your Future</p>
      {stage === 'categories' && <Categories setStage={setStage} setQuestions={setQuestions} />}
      {stage === 'quiz' && (
        <Quiz
          questions={questions}
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          score={score}
          setScore={setScore}
          setStage={setStage}
        />
      )}
      {stage === 'loading' && (
        <div className="wheel-and-hamster" aria-label="Orange and tan hamster running in a metal wheel" role="img">
          <div className="wheel"></div>
          <div className="hamster">
            <div className="hamster__body">
              <div className="hamster__head">
                <div className="hamster__ear"></div>
                <div class="hamster__eye"></div>
                <div className="hamster__nose"></div>
              </div>
              <div className="hamster__limb hamster__limb--fr"></div>
              <div className="hamster__limb hamster__limb--fl"></div>
              <div className="hamster__limb hamster__limb--br"></div>
              <div className="hamster__limb hamster__limb--bl"></div>
              <div className="hamster__tail"></div>
            </div>
          </div>
          <div className="spoke"></div>
        </div>
      )}
      {stage === 'results' && <Results score={score} setStage={setStage} setScore={setScore} />}
    </div>
  );
}

export default App;