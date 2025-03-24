import React from 'react';
import styled from "styled-components";
import { ref, remove } from "firebase/database";
import { database } from "./Firebase"; // Import Firebase database

const NoteDiv = styled.div`
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  text-align: left;
  font-size: 18px;
  margin: 10px;
  min-width: 300px;
  position: relative;
`;

const H = styled.h3`
  font-size: 20px;
  font-weight: bold;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 5px;
  right: 10px;
  background: red;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 14px;
  border-radius: 5px;
`;

const Note = ({ note, id, onDelete }) => {
  const handleDelete = () => {
    const noteRef = ref(database, `data/${id}`); // Reference the note in Firebase
    remove(noteRef) // Remove from Firebase
      .then(() => onDelete(id)) // Remove from UI
      .catch(error => console.log("Error deleting note:", error));
  };

  return (
    <NoteDiv>
      <DeleteButton onClick={handleDelete}>❌</DeleteButton>
      <H>{note.title}</H>
      <p>{note.text}</p>
    </NoteDiv>
  );
};

export default Note;

