import path from 'path';
import express from 'express';
import bodyParser from "body-parser";
import cors from 'cors';

const app = express();
app.use(express.static('./english-for-kids'));
