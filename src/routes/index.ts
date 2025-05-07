import express, { RequestHandler } from 'express';
import produtosRouter from './produtos';
import voosRouter from './voos';
import { interferir } from '../middlewares/interferir';

const router = express.Router();

router.use(interferir);

router.use('/produtos', produtosRouter);
router.use('/voos', voosRouter);

router.get('/ping', (req, res) => {
    console.log("EXECUTOU O PING");
    res.json({ pong: true });
});

router.get('/', (req, res) => {
    let nome: string = 'Ney';
    let idade: number = 18;

    res.json({ nome, idade });
});

export default router;