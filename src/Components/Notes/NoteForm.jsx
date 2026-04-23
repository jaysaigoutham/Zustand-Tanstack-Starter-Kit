import { useNoteActions } from "../../Store/NoteStore";

const NoteForm = () => {
  const { addNotes } = useNoteActions();

  const addNoteEvent = async (e) => {
    e.preventDefault();
    const content = e.target.note.value;
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
