import express, { Application, Request, Response } from 'express';
import path from 'path';
// const path = require('path');
import bodyParser from 'body-parser';
import cors from 'cors';
const PORT = process.env.PORT || 3000;
const app: Application = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const publicPath = path.resolve(__dirname, 'dist');
const indexPath = path.resolve(__dirname, 'dist/index.html');

app.use(/^(?!\/api\/)/, express.static(publicPath));
app.use(/^(?!\/api\/)/, (req: Request, res: Response) => {
  res.sendFile(indexPath);
});

app.listen(PORT, () => console.log('Server started on http://localhost:3000'));
