import { useNoteActions } from "../../Store/NoteStore";

const NoteList = ({ notes = [] }) => {
  const { toggleImportance } = useNoteActions();

  return (
    <>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            {note.important ? <strong>{note.content}</strong> : note.content}
            <button onClick={() => toggleImportance(note.id)}>
              {note.important ? "make not important" : "make important"}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NoteList;
