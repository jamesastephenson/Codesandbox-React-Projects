import React, { useState } from "react";
import AddNote from "./components/AddNote.js";
import EditNote from "./components/EditNote.js";
import TestDiv from "./components/NoteTable.js";
import "./styles/App.scss";

const noteData = [
  { id: 1, title: "Note 1", text: "Get groceries" },
  { id: 2, title: "Note 2", text: "Put away groceries" },
  { id: 3, title: "Note 3", text: "Cook something with groceries" }
];

// var to assign note IDs without overwriting (incremented in addNote())
var idAssigner = noteData.length;

export default function App() {
  // default state
  const [notes, setNotes] = useState(noteData);
  const [editing, setEditing] = useState(false);
  const initialNoteState = { id: null, title: "", text: "" };
  const [currentNote, setCurrentNote] = useState(initialNoteState);

  // add note to notes
  const addNote = (note) => {
    // incrememt idAssigner and set value to id
    idAssigner += 1;
    note.id = idAssigner;
    setNotes([...notes, note]);
  };

  // filter through notes, keep all notes that don't match id passed in
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  // enable editing and select current note
  const editNote = (note) => {
    setEditing(true);
    setCurrentNote({ id: note.id, title: note.title, text: note.text });
  };

  // disable editing and apply updated info to selected note
  const updateNote = (id, updatedNote) => {
    setEditing(false);
    setNotes(notes.map((note) => (note.id === id ? updatedNote : note)));
  };

  return (
    <div className="App">
      <h1>Notecards</h1>
      <div className="flexRow">
        {editing ? (
          <div className="flexSection editing">
            <h2>Edit Note</h2>
            <EditNote
              setEditing={setEditing}
              currentNote={currentNote}
              updateNote={updateNote}
            />
          </div>
        ) : (
          <div className="flexSection">
            <h2>Add Notecard</h2>
            <AddNote addNote={addNote} />
          </div>
        )}
        <div className="flexTable">
          <TestDiv notes={notes} editNote={editNote} deleteNote={deleteNote} />
        </div>
      </div>
      <footer>James Stephenson 2022</footer>
    </div>
  );
}
