import dotenv from 'dotenv';
dotenv.config();
import express, { Request, Response } from 'express';
import config from 'config';
import cors from 'cors';
import { AppDataSource } from './utils/data-source';
import AppError from './utils/appError';
import peopleRouter from './routes/PeopleRoutes';

AppDataSource.initialize()
  .then(async () => {
    const app = express();
    app.use(express.json());

    app.use(
      cors({
        origin: config.get<string>('origin'),
        credentials: true,
      }),
    );

    app.use('/api/people', peopleRouter);

    app.use((error: AppError, req: Request, res: Response) => {
      error.status = error.status || 'error';
      error.statusCode = error.statusCode || 500;

      res.status(error.statusCode).json({
        status: error.status,
        message: error.message,
      });
    });

    const port = config.get<number>('port');
    app.listen(port);
    console.log(`Server started with pid: ${process.pid} on port: ${port}`);
  })
  .catch((error) => console.log(error));
