import { useEffect } from "react";
import NoteFilter from "./Components/Notes/NoteFilter";
import NoteForm from "./Components/Notes/NoteForm";
import NoteList from "./Components/Notes/NoteList";
import { useNoteActions, useNotesFilterd } from "./Store/NoteStore";

const Notes = () => {
  const { initializeNotes } = useNoteActions();

  useEffect(() => {
    initializeNotes();
  }, [initializeNotes]);

  return (
    <div>
      <NoteForm />
      <NoteFilter />
      <NoteList notes={useNotesFilterd()} />
    </div>
  );
};

export default Notes;
