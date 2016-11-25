import express from 'express';
import rethink from 'rethinkdb';

const router = express.Router();

router.get('/', (req, res) => res.json({ authenticated: true }));
router.post('/register', async (req, res) => {
  const result = await rethink.table('users').insert(req.body).run(req.dbConnection);
  res.send(result);
});

export default router;
