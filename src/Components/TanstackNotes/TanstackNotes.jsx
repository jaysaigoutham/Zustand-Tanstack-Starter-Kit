import { useTanstackNotes } from "../../Hooks/useTanstackNotes";

const TanstackApp = () => {
  const {
    notes,
    isPending,
    error,
    addNote: addNoteToServer,
    toggleImportant,
  } = useTanstackNotes();

  const addNote = async (event) => {
    event.preventDefault();
    const content = event.target.note.value;
    event.target.reset();
    console.log(content);
    addNoteToServer(content);
  };

  const toggleImportance = (note) => {
    console.log("toggle importance of", note.id);
    toggleImportant(note);
  };

  if (isPending) {
    return <div>loading data...</div>;
  }

  if (error) {
    return (
      <>
        <h2> Error - {error}</h2>
      </>
    );
  }

  return (
    <div>
      <h2>Notes app - using TanStack</h2>

      <form onSubmit={addNote}>
        <input name="note" />
        <button type="submit">add</button>
      </form>
      {notes.map((note) => (
        <li key={note.id} onClick={() => toggleImportance(note)}>
          {note.important ? <strong>{note.content}</strong> : note.content}
          <button onClick={() => toggleImportance(note)}>
            {note.important ? "make not important" : "make important"}
          </button>
        </li>
      ))}
    </div>
  );
};

export default TanstackApp;
