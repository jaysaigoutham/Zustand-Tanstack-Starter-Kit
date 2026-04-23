const baseURL = "http://localhost:3001/notes";

const getAll = async () => {
  const response = await fetch(baseURL);
  if (!response.ok) {
    throw new Error("failed to fetch notes");
  }

  const data = await response.json();
  return data;
};

const createNew = async (content) => {
  const response = await fetch(baseURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content, import: false }),
  });

  if (!response.ok) {
    throw new Error("Failed to create note");
  }

  return await response.json();
};

const update = async (id, note) => {
  const response = await fetch(`${baseURL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(note),
  })

  if (!response.ok) {
    throw new Error('Failed to update note')
  }

  return await response.json()
}

export default { getAll, createNew, update };
