import fs from 'fs';
import path from 'path';

export function createNote(req, res) {
  console.log('Se está llamando a createNote');
  const { id, title, content } = req.body;
  console.log('Datos recibidos:', { id, title, content });
  const notesDirectory = path.resolve(process.cwd(), 'Notas');
  const noteFilePath = path.join(notesDirectory, `${id}.note`);
  console.log(notesDirectory);
  console.log(noteFilePath);

  try {
    if (fs.existsSync(noteFilePath)) {
        return res.status(400).send('El ID de la nota ya existe');
    }

    const currentDate = new Date().toISOString();
    const noteData = { id, title, content, created_at: currentDate };

    fs.writeFileSync(noteFilePath, JSON.stringify(noteData));

    res.status(201).json({
        message: 'Nota creada exitosamente',
        note: noteData
    });
  } catch (error) {
    console.error('Error al crear la nota:', error);
    res.status(500).send('Error al crear la nota');
  }
}

export function editNote(req, res) {
  const noteId = req.params.id;
  const { title, content } = req.body;
  const noteFilePath = getNoteFilePath(noteId);
 

  if (!fs.existsSync(noteFilePath)) {
    return res.status(404).json({ error: 'Nota no encontrada' });
  }

  try {
    const existingNoteContent = fs.readFileSync(noteFilePath, 'utf-8');
    const existingNoteData = JSON.parse(existingNoteContent);
    console.log(existingNoteData)
    // Actualiza solo si se proporciona un título o contenido nuevo
    if (title !== undefined) {
      existingNoteData.title = title;
    }
    if (content !== undefined) {
      existingNoteData.content = content;
    }

    // Guarda los cambios en la nota
    fs.writeFileSync(noteFilePath, JSON.stringify(existingNoteData));
    res.json(existingNoteData);
    res.send("Actualizado")
  } catch (error) {
    console.error('Error al editar la nota:', error);
    res.status(500).json({ error: 'Error al editar la nota' });
  }
}

function getNoteFilePath(id) {
  const notesDirectory = path.resolve(process.cwd(), 'Notas');
  return path.join(notesDirectory, `${id}.note`);
}

export function listNotes(req, res) {
  const notesDirectory = path.resolve(process.cwd(), 'Notas');

  try {
    const filesInDirectory = fs.readdirSync(notesDirectory);

    let notes = filesInDirectory.map(file => {
      const filePath = path.join(notesDirectory, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      return JSON.parse(fileContent);
    });

    if (req.filters) {
      notes = notes.filter(note => {
        for (const key in req.filters) {
          if (note[key] !== req.filters[key]) {
            return false;
          }
        }
        return true;
      });
    }
    
    if (req.sortedBy) {
      const { field, order } = req.sortedBy;
      notes = notes.sort((a, b) => (a[field] > b[field] ? order : -order));
    }
    
    res.status(200).json(notes);
  } catch (error) {
    console.error('Error al listar las notas:', error);
    res.status(500).send('Error al listar las notas');
  }
}

export function deleteNote(req, res) {
  const notesDirectory = path.resolve(process.cwd(), 'Notas');
  const { id } = req.params;

  try {
    const noteFilePath = path.join(notesDirectory, `${id}.note`);

    if (!fs.existsSync(noteFilePath)) {
      return res.status(404).json({ error: 'Nota no encontrada' });
    }

    fs.unlinkSync(noteFilePath);

    res.status(200).json({ message: 'Nota eliminada exitosamente' });
  } catch (error) {
    res.status(500).send('Error al eliminar la nota');
  }
}
