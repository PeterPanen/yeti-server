import express from 'express';

const router = express.Router();

router.get('/auth', (req, res) => res.json({ authenticated: true }));
router.post('/auth', (req, res) => res.json({ message: 'Authentication success' }));
