import express from 'express';

const router = express.Router();

router.get('/ping', (req, res) => {
    res.json({ pong: true });
});

router.get('/', (req, res) => {
    let nome: string = 'Ney';
    let idade: number = 18;

    res.json({ nome, idade });
});

export default router;