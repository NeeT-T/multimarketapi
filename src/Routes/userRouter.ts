import express from 'express';
import Controller from '../Controllers/userController';

const router = express.Router();

router.post('/authenticate', Controller.authenticate);
router.post('/verifyToken', Controller.verifytoken);
router.post('/logout', Controller.logout);
router.get('/:id', Controller.getUserById);
router.post('/', Controller.saveUser);
router.put('/:id', Controller.updateCredentials);
router.delete('/:id', Controller.removeUser);

export default router;