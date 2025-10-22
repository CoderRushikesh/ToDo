// src/components/NoteCard.js
import React from 'react';
import './NoteCard.css';

const NoteCard = ({ note, onDelete }) => (
  <div className="note-card">
    <p>{note.text}</p>
    <button onClick={() => onDelete(note.id)}>Delete</button>
  </div>
);

export default NoteCard;
