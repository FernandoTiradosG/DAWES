import express from 'express';
import { createNote, editNote, deleteNote, listNotes } from '../controllers/controller.js';
import { errorMiddleware } from '../middlewares/error-middleware.js';
import { createUser, deleteUser, editUser, getUser, listUsers , login} from '../controllers/user-controller.js';
import { authenticateToken, filterMiddleware, paginate, sortByMiddleware } from '../middlewares/misc-middleware.js';

const router = express.Router();


/**
 * @swagger
 * /users:
 *   get:
 *     summary: Obtiene todos los usuarios
 *     description: Devuelve todos los usuarios almacenados
 *     responses:
 *       200:
 *         description: Éxito, devuelve los usuarios
 */
router.get('/users', filterMiddleware(['id', 'username']), sortByMiddleware(['id', 'username']), paginate, listUsers);

/**
 * @swagger
 * /user/{id}:
 *   get:
 *     summary: Obtiene un usuario por su ID
 *     description: Devuelve un usuario según su ID proporcionado
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del usuario a obtener
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Éxito, devuelve el usuario
 *       404:
 *         description: Usuario no encontrado
 */
router.get('/user/:id', getUser);

/**
 * @swagger
 * /user:
 *   post:
 *     summary: Crea un nuevo usuario
 *     description: Crea un nuevo usuario con la información proporcionada
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - username
 *               - password
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 *       409:
 *         description: El usuario ya existe
 */
router.post('/user', createUser);

/**
 * @swagger
 * /user/{id}:
 *   patch:
 *     summary: Edita un usuario existente
 *     description: Edita un usuario existente según el ID proporcionado
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del usuario a editar
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - username
 *               - password
 *     responses:
 *       200:
 *         description: Usuario editado exitosamente
 *       404:
 *         description: Usuario no encontrado
 */
router.patch('/user/:id', editUser);

/**
 * @swagger
 * /user/{id}:
 *   delete:
 *     summary: Elimina un usuario existente
 *     description: Elimina un usuario según el ID proporcionado
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del usuario a eliminar
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Usuario eliminado exitosamente
 *       404:
 *         description: Usuario no encontrado
 */
router.delete('/user/:id', deleteUser);

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Iniciar sesión
 *     description: Inicia sesión con las credenciales proporcionadas
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - username
 *               - password
 *     responses:
 *       200:
 *         description: Sesión iniciada exitosamente
 *       401:
 *         description: Credenciales incorrectas
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Error al iniciar sesión
 */
router.post('/login', login);

/**
 * @swagger
 * /create:
 *   post:
 *     summary: Crea una nueva nota
 *     description: Crea una nueva nota con la información proporcionada
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *             required:
 *               - id
 *               - title
 *               - content
 *     responses:
 *       201:
 *         description: Nota creada exitosamente
 *       400:
 *         description: El ID de la nota ya existe
 */
router.post('/create', authenticateToken, createNote);

/**
 * @swagger
 * /edit/{id}:
 *   patch:
 *     summary: Edita una nota existente
 *     description: Edita una nota existente según el ID proporcionado
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la nota a editar
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *             required:
 *               - title
 *               - content
 *     responses:
 *       200:
 *         description: Nota editada exitosamente
 *       404:
 *         description: Nota no encontrada
 */
router.patch('/edit/:id', authenticateToken, editNote);

/**
 * @swagger
 * /delete/{id}:
 *   delete:
 *     summary: Elimina una nota existente
 *     description: Elimina una nota existente según el ID proporcionado
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la nota a eliminar
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Nota eliminada exitosamente
 *       404:
 *         description: Nota no encontrada
 */
router.delete('/delete/:id', authenticateToken, deleteNote);

/**
 * @swagger
 * /list:
 *   get:
 *     summary: Lista todas las notas
 *     description: Obtiene la lista de todas las notas
 *     responses:
 *       200:
 *         description: Lista de notas obtenida exitosamente
 */
router.get('/list', authenticateToken, filterMiddleware(['id', 'title', 'content', 'created_at']), sortByMiddleware(['id', 'title', 'content', 'created_at']), paginate, listNotes);

router.use(errorMiddleware);

export default router
