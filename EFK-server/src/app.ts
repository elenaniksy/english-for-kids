import express, { Application, Request, Response } from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
const PORT = process.env.PORT || 80;
import categories from './category/router';
const app: Application = express();

// heroku-user:Dbn5AhaPhQI9lNlO

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

app.listen(PORT, () => console.log('Server started on http://localhost:80'));
