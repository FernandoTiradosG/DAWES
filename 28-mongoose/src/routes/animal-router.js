import { Router } from 'express';
import { createAnimals, getAnimals, updateAnimals, deleteAnimals, getAnimal } from '../controllers/animal-controller.js';

const router = Router();

router.get('/', getAnimals);
router.post('/', createAnimals);
router.get('/:id', getAnimal);
router.patch('/:id', updateAnimals);
router.delete('/:id', deleteAnimals);


export default router;
