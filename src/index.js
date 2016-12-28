import path from 'path';
import express from 'express';
import nunjucks from 'nunjucks';
import routes from './routes';

// Instantiate application.
const app = express();
const PORT = 3000;

// Configure template engine.
app.set('view engine', 'html');
nunjucks.configure(path.join(__dirname, 'views'), {
  autoescape: true,
  express: app,
});

// Mount routes.
app.use(routes);

// Start listening for connections.
app.listen(PORT);
