import config from 'config';
import rethink from 'rethinkdb';

let connection = null;

export default async (req, res, next) => {
  try {
    req.dbConnection = connection ? connection : connection = await rethink.connect(config.get('rethinkdb')); // eslint-disable-line
  } catch (e) {
    res.send(500, { error: e.message });
  }

  next();
};
