import { useNotes, useNoteActions } from "../../Store/NoteStore";
import noteService from "../../Services/notes";
import { TextField, Button } from "@mui/material";
import Notification from "../Notification/Notification";
import { useState } from "react";

const NoteForm = () => {
  const { add, addNotes } = useNoteActions();
  const generateId = () => Number((Math.random() * 1000000).toFixed(0));
  const [notification, setNotification] = useState(null);

  const addNoteEvent = async (e) => {
    e.preventDefault();
    const content = e.target.note.value;
    /*add({ id: generateId(), content, important: false });*/
    /*const newNote = await noteService.createNew(content);
    add(newNote);*/
    await addNotes(content);
    setNotification({ text: `Note '${content}' added!`, type: "success" });
    e.target.reset();
  };

  return (
    <>
      <Notification notification={notification} />
      <form onSubmit={addNoteEvent}>
        <br />
        <TextField label="note content" id="note" />
        <div>
          <Button type="submit" variant="contained" style={{ marginTop: 10 }}>
            save
          </Button>
        </div>
      </form>
    </>
  );
};

export default NoteForm;
