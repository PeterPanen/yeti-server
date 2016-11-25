import express from 'express';
import rethink from 'rethinkdb';
import userSchema from '../schemas/user';

const router = express.Router();

router.get('/', (req, res) => res.json({ authenticated: true }));

// Register new user
router.post('/register', async (req, res) => {
  req.checkBody(userSchema);
  const validation = await req.getValidationResult();
  if (!validation.isEmpty()) {
    return res.status(400).send({ message: 'Validation errors', errors: validation.mapped() });
  }

  const result = await rethink.table('users').insert(req.body).run(req.dbConnection);
  return res.send(result);
});

export default router;
