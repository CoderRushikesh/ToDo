// src/pages/NotesPage.js
import React, { useState } from 'react';
import NoteCard from './NoteCard';
import './NotePage.css';

const NotesPage = () => {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState('');

  const addNote = () => {
    if (input.trim()) {
      const newNote = {
        id: Date.now(),
        text: input,
      };
      setNotes(prev => [...prev, newNote]);
      setInput('');
    }
  };

  const deleteNote = (id) => {
    setNotes(prev => prev.filter(note => note.id !== id));
  };

  const editNote = (id, newText) => {
    setNotes(prev =>
      prev.map(note =>
        note.id === id ? { ...note, text: newText } : note
      )
    );
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
          <NoteCard
            key={note.id}
            note={note}
            onDelete={deleteNote}
            onEdit={editNote}
          />
        ))}
      </div>
    </div>
  );
};

export default NotesPage;
