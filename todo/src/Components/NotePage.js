// src/pages/NotesPage.js
import React, { useState } from 'react';
import NoteCard from '../Components/NoteCard';
import './NotePage.css';

const NotesPage = () => {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState('');

  const addNote = () => {
    if (input.trim()) {
      setNotes([...notes, { id: Date.now(), text: input }]);
      setInput('');
    }
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="notes-page">
      <div className="note-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new note..."
        />
        <button onClick={addNote}>Add</button>
      </div>
      <div className="notes-list">
        {notes.map(note => (
          <NoteCard key={note.id} note={note} onDelete={deleteNote} />
        ))}
      </div>
    </div>
  );
};

export default NotesPage;
