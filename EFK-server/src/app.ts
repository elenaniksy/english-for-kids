import express, { Application, Request, Response } from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
const PORT = process.env.PORT || 80;
import routerObj from './category/router';
const categories = routerObj.router;
const app: Application = express();
const mongoose = require('mongoose');
// heroku-user:Dbn5AhaPhQI9lNlO
// const url = 'mongodb+srv://heroku-user:Dbn5AhaPhQI9lNlO@cluster0.eaj4c.mongodb.net/EFKdatabase?retryWrites=true&w=majority';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const publicPath = path.resolve(__dirname, 'dist');
const indexPath = path.resolve(__dirname, 'dist/index.html');

app.use(/^(?!\/api\/)/, express.static(publicPath));
app.use(/^(?!\/api\/)/, (req: Request, res: Response) => {
  res.sendFile(indexPath);
});

app.use('/api/categories', categories);
// app.use('/api/items', items);
app.use('/api/initDataBase', function (req, res, next) {
  routerObj.initDataBase();
});

app.listen(PORT, () => console.log('Server started on http://localhost:80'));
