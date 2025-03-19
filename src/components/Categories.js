import React from 'react';

function Categories({ setStage, setQuestions }) {
  const fetchQuestions = async (category) => {
    try {
      const response = await fetch(`https://opentdb.com/api.php?amount=5&category=${category}&type=multiple`);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setQuestions(data.results);
      setStage('quiz');
    } catch (error) {
      console.error('Failed to fetch questions:', error);
    }
  };

  const categories = [
    { id: 18, name: 'Computer Science' },
    { id: 9, name: 'General Knowledge' },
    { id: 10, name: 'Books' },
    { id: 11, name: 'Film' },
    { id: 12, name: 'Music' },
    { id: 15, name: 'Video Games' },
    { id: 17, name: 'Science & Nature' },
    { id: 19, name: 'Mathematics' },
    { id: 21, name: 'Sports' },
    { id: 23, name: 'History' },
    { id: 27, name: 'Animals' },
    { id: 31, name: 'Japanese Anime & Manga' },
  ];

  return (
    <div className="categories-container">
      <h2>Choose a Category</h2>
      <div className="categories-grid">
        {categories.map((cat) => (
          <button key={cat.id} className="category-button" onClick={() => fetchQuestions(cat.id)}>
            <span>{cat.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Categories;