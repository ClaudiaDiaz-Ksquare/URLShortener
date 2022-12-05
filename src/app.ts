import express, { Application, Request, Response } from 'express';
const app: Application = express();
// import { TodoRouter } from './routes/Todo.routes'
import { URLRouter, redirectShortUrl } from './routes/URL.routes'

app.use(express.json());

// app.use('/todos', TodoRouter);

app.get('/', (req: Request, res: Response) => {
    res.send('VIVEEEEEEEEEEE');
})

// GET redirects short URL to its original URL.
// app.use('/:shorturl', redirectShortUrl)

// Middleware para hacer el [POST] request
app.use('/url', URLRouter);

export default app;