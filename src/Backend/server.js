const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let posts = [
  { id: 1, title: 'Postagem Inicial', content: 'Conteúdo do primeiro post.' },
];

// Rota GET para obter todas as postagens
app.get('/api/posts', (req, res) => {
  res.json(posts);
});

// Rota POST para adicionar uma nova postagem
app.post('/api/posts', (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
    content: req.body.content,
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
