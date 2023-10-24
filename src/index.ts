import { MongoClient } from 'mongodb';
import express, { Request, Response } from 'express';
import routerBase from './routes';

import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use('/hamburguesas', routerBase);

const port = process.env.PORT256;
app.use(express.json());

app.listen(port, () => {
  console.log(`Server corriendo en ${port}`);
});
