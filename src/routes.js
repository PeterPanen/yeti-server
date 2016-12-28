import express from 'express';
import authRoutes from './routes/auth';
import userRoutes from './routes/user';

const router = express.Router();

router.get('/', (req, res) => res.render('home/index', { title: 'World!' }));
router.use('/auth', authRoutes);
router.use('/user', userRoutes);

export default router;
