import express from 'express';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import Debug from 'debug';
import connectDb from './middleware/connectDb';
import routes from './routes';

const debug = Debug('development');

// Instantiate application.
const app = express();
const PORT = 3000;

// Middleware
app.use(connectDb);
app.use(bodyParser.json());
app.use(expressValidator());

// Mount routes.
app.use(routes);

app.listen(PORT, () => debug(`Listening for connections on http://localhost:${PORT}`));
