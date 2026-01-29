import express from 'express';
import taskRouter from './routesrs/taskRouter.js';
import {connectDB } from './config/db.js';
import dotenv from 'dotenv';

const PORT = process.env.PORT || 5000;
dotenv.config();
const app = express();
app.use(express.json());
app.use('/api/tasks', taskRouter);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });

}).catch((error) => {
  console.error("Failed to start server:", error);
});

