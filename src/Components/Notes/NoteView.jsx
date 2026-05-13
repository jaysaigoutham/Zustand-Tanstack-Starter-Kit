import { useParams } from "react-router-dom";

const NoteView = ({ notes, toggleImportance }) => {
  const id = useParams().id;
  const note = notes.find((n) => n.id === id);

  return (
    <li className="note">
      <span>{note.content}</span>
      <button onClick={() => toggleImportance(id)}>{label}</button>
    </li>
  );
};

export default NoteView;
