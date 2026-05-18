import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getNotes, createNote, updateNote } from "../Requests/requests";

// Encapsulates note query + mutations behind a small UI-friendly API.
export const useTanstackNotes = () => {
  const queryClient = useQueryClient();

  const newNoteMutation = useMutation({
    mutationFn: createNote,
    onSuccess: (newNote) => {
      // Fast local cache append after create succeeds.
      const notes = queryClient.getQueryData(["notes"]);
      queryClient.setQueryData(["notes"], notes.concat(newNote));
    },
  });

  const updateNoteMutation = useMutation({
    mutationFn: updateNote,
    onSuccess: () => {
      // Refresh authoritative list after update to keep cache consistent.
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
  });

  const result = useQuery({
    queryKey: ["notes"],
    queryFn: getNotes,
    retry: 1,
    refetchOnWindowFocus: false,
  });

  const errorMessage =
    result.error?.message ||
    newNoteMutation.error?.message ||
    updateNoteMutation.error?.message ||
    null;

  return {
    notes: result.data,
    isPending: result.isPending,
    error: errorMessage,
    addNote: (content) => newNoteMutation.mutate({ content, important: false }),
    toggleImportant: (note) =>
      updateNoteMutation.mutate({
        ...note,
        important: !note.important,
      }),
  };
};
