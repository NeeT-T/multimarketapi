import express from 'express';
import Controller from '../Controllers/userController';

const router = express.Router();

router.post('/authenticate', Controller.authenticate);
router.get('/:id', Controller.getUserById);
router.post('/', Controller.saveUser);
router.put('/:id', Controller.updateUser);
router.delete('/:id', Controller.removeUser);

export default router;