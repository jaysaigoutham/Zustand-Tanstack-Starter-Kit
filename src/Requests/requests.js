const baseUrl = "http://localhost:3001/notes";

// Read all notes from the json-server endpoint.
export const getNotes = async () => {
  const response = await fetch(baseUrl);
  if (!response.ok) {
    throw new Error("Failed to fetch notes");
  }
  return await response.json();
};

// Create a note and return the created record from the server.
export const createNote = async (newNote) => {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newNote),
  };

  const response = await fetch(baseUrl, options);

  if (!response.ok) {
    throw new Error("Failed to create note");
  }

  return await response.json();
};

// Replace an existing note by id and return the updated record.
export const updateNote = async (updateNote) => {
  const options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updateNote),
  };

  const response = await fetch(`${baseUrl}/${updateNote.id}`, options);

  if (!response.ok) {
    throw new Error("Failed to update note");
  }

  return await response.json();
};
