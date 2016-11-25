import config from 'config';
import rethink from 'rethinkdb';

export default function (req, res, next) {
  rethink.connect(config.get('rethinkdb')).then((connection) => {
    req.dbConnection = connection; // eslint-disable-line
    next();
  }).error(err => res.send(500, { error: err.message }));
}
