import express from 'express';
import helmet from 'helmet';
import path from 'path';

const server = express();

server.use(helmet());
server.use(express.json()); 
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, '../public')));

server.get('/ping', (req, res) => {
    res.json({ pong: true });
});

server.get('/produtos', (req, res) => {
    res.json({ produtos: [] });
});

server.get('/produtos/:id', (req, res) => {
    const { id } = req.params;

    res.json({ id, name: 'Teclado XYZ', price: 90 });
});

server.get('/voos/:from/:to', (req, res) => {
    const { from, to } = req.params;

    res.json({ 
        flight: { 
            from: from.toUpperCase(),
            to: to.toUpperCase(),
            price: 123456 
        }
    })
}); 

server.get('/', (req, res) => {
    let nome: string = 'Ney';
    let idade: number = 18;

    res.json({ nome, idade });
});

server.listen(3000, () => {
    console.log('Servidor está rodando no link: http://localhost:3000/');
});