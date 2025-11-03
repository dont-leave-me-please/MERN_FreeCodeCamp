export function getAllNotes(req, res) {
  res.status(200).json("Fetched all notes successfully!");
}

export function createNote(req, res) {
  res.status(201).json("Note created successfully!");
}

export function updateNote(req, res) {
  res.status(200).json("Note updated successfully!");
}

export function deleteNote(req, res) {
  res.status(200).json("Note deleted successfully!");
}
