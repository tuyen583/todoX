import express from 'express';
import taskRouter from './routesrs/taskRouter.js';

const app = express();


app.use('/api/tasks', taskRouter);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

