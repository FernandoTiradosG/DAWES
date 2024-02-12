import { Note } from '../../models/index.js';

export async function createdNote(note) {
  const noteDoc = new Note(note);
  const createdNote = await noteDoc.save();
  return createdNote;
}

export async function getNoteServices(filters) {
  const { sort, offset, limit, ...query } = filters;
  return Note.find(query).sort(sort).skip(offset).limit(limit);
}

export async function getNoteById(id) {
  return Note.findById(id).populate('author');
}

export async function updateNoteById(id, note) {
  const note = await Note.findById(id);
  Object.assign(note, note);
}

export async function deleteNoteById(id) {
  return Note.findByIdAndDelete(id);
}
