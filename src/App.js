import React, { useState } from 'react';
import './App.css';

function App() {
  const [students] = useState(['Kowsalya', 'Deepika', 'Sarah', 'Bharath', 'Monica']);
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (student) => {
    if (favorites.includes(student)) {
      setFavorites(favorites.filter((fav) => fav !== student));
    } else {
      setFavorites([...favorites, student]);
    }
  };

  return (
    <div className="app-container">
      <div className="list-container">
        <h2>List of Students</h2>
        <ul>
          {students.map((student, index) => (
            <li key={student} className="student-item">
              <span className="student-number">{index + 1}.</span>
              <span className="student-name">{student}</span>
              <button
                onClick={() => toggleFavorite(student)}
                className={favorites.includes(student) ? 'remove-btn' : 'add-btn'}
              >
                {favorites.includes(student) ? 'Remove from Favorite' : 'Add to Favorite'}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="favorite-container">
        <h2>Favorite Students</h2>
        <ul>
          {favorites.map((student, index) => (
            <li key={student} className="student-item">
              <span className="student-number">{index + 1}.</span>
              <span className="student-name">{student}</span>
              <button
                onClick={() => toggleFavorite(student)}
                className="remove-btn"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
