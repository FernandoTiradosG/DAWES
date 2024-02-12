import { HttpStatusError } from "common-errors";
import { createdNote, getNoteServices, getNoteById, updateNoteById } from "../services/mongodb/note-db-services.js";

export async function getAllNote(req, res, next) {
  try {
    const filters = {}
    const note = await getNoteServices();
    return res.send(note);
  } catch (error) {
    next(error);
  }
}

export async function getNote(req, res, next) {
  try {
    const note = await getNoteById();
    return res.send(note);
  } catch (error) {
    next(error);
  }
}

export async function createNoteController(req, res, next) {
  try {
    const body = req.body;
    body.author = req.user.id;
    const note = await createdNote(req.body);
    return res.status(201).send(note);
  } catch (error) {
    next(error);
  }
  return;
}

export async function updateNote() {
  try {
    const note = await updateNoteById(req.params.id, req.body);
    return res.send(note);
  } catch (error) {
    next(error);
  }
}

export async function deleteNote() {
  try {
    const note = await deleteNote(req.params.id,);
    if (!note) throw HttpStatusError(404, 'Note not found');
    return res.send(note);
  } catch (error) {
    next(error);
  }
}
