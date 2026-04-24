
import { create } from "zustand";
import noteService from "../Services/notes"
import notes from "../Services/notes";
import { devtools } from 'zustand/middleware'

const logger = (config) => (set, get) =>
  config(
    (...args) => {
      console.log("Prev state", get());
      set(...args);
      console.log("next atate", get());
    },
    get,
  );

const NoteStore = create(devtools(logger((set, get) => ({
    notes: [
    /* {
      id: 1,
      content: 'Zustand is less complex than Redux',
      important: true,
    }, {
      id: 2,
      content: 'React app benefits from custom hooks',
      important: false,
    }, {
      id: 3,
      content: 'Remember to sleep well',
      important: true,
    } */
  ],
  filter: 'all',
  actions : {
    //Approach 1 
    /*initialize: notes => set(() => ({ notes })),
    add: note => set(
        state => ({ notes: state.notes.concat(note)})
    ),*/
    //Approach 2
    
    initializeNotes : async () => {
      const notes = await noteService.getAll()
      set(() => ({notes}))
    },
    addNotes : async (content) => {
      const newNote = await noteService.createNew(content);
      set(state => ({ notes: state.notes.concat(newNote)}))
    },
    /*toggleImportance: id => set(
      state => ({
        notes: state.notes.map(note =>
          note.id === id ? { ...note, important: !note.important } : note
        )
      })
    ),*/
    toggleImportance: async (id) => {

      //Approach 1- getting state
      //const note = NoteStore.getState().notes.find(n => n.id === id);

      //Approach 2- getting state
      const note = get().notes.find(n => n.id === id);
      const updated  = await noteService.update(id, {...note, important: !note.important})
      set(state => ({
        notes: state.notes.map(n => n.id === id ? updated : n)
      }))
    },
    setFilter: value => set(() => ({ filter: value}))
    
  }
}))))

export const useNotes = () => NoteStore(state => state.notes);
export const useNoteActions = () => NoteStore(state => state.actions);
export const useFilter = () => NoteStore(state => state.filter);
export const useNotesFilterd = () => {
  const notes = NoteStore((state) => state.notes)
  const filter = NoteStore((state) => state.filter)
  if(filter === 'important') return notes.filter(note => note.important)
  if(filter === 'nonimportant') return notes.filter(note => !note.important)
  return notes
}