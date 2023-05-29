// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
import express from 'express';
import path from 'path';
import PopularRoutes from './routers/popular';
import ResponseMiddleware, { ServerResponse } from './common/response.middleware';

const PORT = process.env.PORT || 3001;
const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../../../client/build')));

app.get('/api', (req, res: ServerResponse, next) => {
  res.body = 'Hello from CatWiki!';
  next();
});

app.use('/api/popular', PopularRoutes());
app.use(ResponseMiddleware);

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
