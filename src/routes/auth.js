import express from 'express';

const router = express.Router();

router.get('/', (req, res) => res.json({ authenticated: true }));
router.post('/', (req, res) => res.json({ message: 'Authentication success' }));

export default router;
