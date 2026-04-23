
import { create } from "zustand";
import noteService from "../Services/notes";
import { devtools } from "zustand/middleware";

const logger = (config) => (set, get) =>
  config(
    (...args) => {
      console.log("Prev state", get());
      set(...args);
      console.log("next atate", get());
    },
    get,
  );

const NoteStore = create(
  devtools(
    logger((set, get) => ({
      notes: [],
      filter: "all",
      actions: {
        initializeNotes: async () => {
          const notes = await noteService.getAll();
          set(() => ({ notes }));
        },
        addNotes: async (content) => {
      const newNote = await noteService.createNew(content);
          set((state) => ({ notes: state.notes.concat(newNote) }));
        },
        toggleImportance: async (id) => {
          const note = get().notes.find((currentNote) => currentNote.id === id);
          const updated = await noteService.update(id, {
            ...note,
            important: !note.important,
          });

          set((state) => ({
            notes: state.notes.map((currentNote) =>
              currentNote.id === id ? updated : currentNote,
            ),
          }));
        },
        setFilter: (value) => set(() => ({ filter: value })),
      },
    })),
  ),
);

export const useNotes = () => NoteStore(state => state.notes);
export const useNoteActions = () => NoteStore(state => state.actions);
export const useFilter = () => NoteStore(state => state.filter);
export const useNotesFilterd = () => {
  const notes = NoteStore((state) => state.notes);
  const filter = NoteStore((state) => state.filter);

  if (filter === "important") {
    return notes.filter((note) => note.important);
  }

  if (filter === "nonimportant") {
    return notes.filter((note) => !note.important);
  }

  return notes;
};