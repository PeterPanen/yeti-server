import express from 'express';
import routes from './routes';

// Instantiate application.
const app = express();
const PORT = 3000;

// Mount routes.
app.use(routes);

// Application http listener.
app.listen(PORT);
