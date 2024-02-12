import { Router } from "express";
import { createNoteController, deleteNote, getAllNote, getNote, updateNote } from "../controllers/note-controller.js";

const router = Router();

router.get('/', getAllNote);
router.get('/:id', getNote)
router.post('/', createNoteController);
router.put('/:id', updateNote);
router.delete('/:id', deleteNote);

export default router;
