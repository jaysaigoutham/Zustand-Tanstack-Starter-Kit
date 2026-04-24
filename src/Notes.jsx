import { useEffect } from "react";
import NoteFilter from "./Components/Notes/NoteFilter";
import NoteForm from "./Components/Notes/NoteForm";
import NoteList from "./Components/Notes/NoteList";
import { useNoteActions, useNotes, useNotesFilterd } from "./Store/NoteStore";
import noteService from "./Services/notes"

const Notes = () => {

  const {initialize, initializeNotes} = useNoteActions()

  useEffect(() => {
    initializeNotes();
    //noteService.getall().then(notes => initialize(notes))
  }, [initializeNotes])

  return (
    <div>
      <NoteForm />
      <NoteFilter />
      <NoteList notes={useNotesFilterd()} />
    </div>
  );
};

export default Notes;
