import { useNoteActions } from "../../Store/NoteStore";
import { Link } from "react-router-dom"
import { Container } from "@mui/material";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'


const NoteList = ({ notes = [] }) => {
  const { toggleImportance } = useNoteActions();

  const tableStyle = {
    background : "gray"
  }

  return (
    <>
      {/*<ul>
        {notes.map((note) => (
          <li key={note.id}>
            {note.important ?  <strong><Link to={`/notes/${note.id}`}>{note.content}</Link></strong> : <Link to={`/notes/${note.id}`}>{note.content}</Link>}
            <button onClick={() => toggleImportance(note.id)}>
              {note.important ? "make not important" : "make important"}
            </button>
          </li>
        ))}
      </ul>*/}

      <h2>Notes</h2>

      <TableContainer component={Paper}>
        <Table style={tableStyle}>
          <TableHead>
            <TableRow>
              <TableCell>content</TableCell>
              <TableCell>important</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {notes.map(note => (
              <TableRow key={note.id}>
                <TableCell>
                  <Link to={`/notes/${note.id}`}>
                    {note.content}
                  </Link>
                </TableCell>

                <TableCell>
                  {note.important ? 'yes': 'no'}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default NoteList;
