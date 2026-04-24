import { useNotes, useNoteActions } from "../../Store/NoteStore";
import noteService from "../../Services/notes"

const NoteForm = () => {
  const { add, addNotes } = useNoteActions();
  const generateId = () => Number((Math.random() * 1000000).toFixed(0));

  const addNoteEvent = async (e) => {
    e.preventDefault();
    const content = e.target.note.value;
    /*add({ id: generateId(), content, important: false });*/
    /*const newNote = await noteService.createNew(content);
    add(newNote);*/
    await addNotes(content);
    e.target.reset();
  };

  return (
    <>
      <form onSubmit={addNoteEvent}>
        <input name="note" />
        <button type="submit">add</button>
      </form>
    </>
  );
};

export default NoteForm;
