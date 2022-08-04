import express from "express" 
import db from "./config/dbConect.js"
// import livros from "./models/Livro.js"
import routes from "./routes/index.js"


db.on("error", console.log.bind(console,"Erro de conexão"))
db.once("open",()=>{
    console.log('conexão feita com sucesso')
})

const app = express();

app.use(express.json())

routes(app);

export default app

// const livros = [
//     {id: 1, "titulo":"Rei Negro"},
//     {id: 2, "titulo":"Senhor dos Aneis"},
//     {id: 3, "tituli":"O poder do subconciente"},
// ]

// app.get('/', (req, res) =>{
//     res.status(200).send('Curso de Node');
// })

// app.get('/livros', (re, res)=>{
//     livros.find((err, livros) => {
//         res.status(200).json(livros)
//     })
// })

// app.get('/livros/:id', (req, res)=>{
//     let index = buscaLivro(req.params.id);
//     res.status(200).json(livros[index]);
//  })

// app.post('/livros', (req, res)=>{
//     livros.push(req.body);
//     res.status(201).send('Livro foi cadastrado com sucesso ')
// })

// app.put('/livros/:id', (req, res)=>{
//    let index = buscaLivro(req.params.id);
//    livros[index].titulo = req.body.titulo;
//    res.status(200).json(livros);
// })

// app.delete('/livros/:id', (req, res)=>{
//     let {id} = req.params;  
//     let index = buscaLivro(id);
//     livros.splice(index, 1);
//     res.status(200).send(`Livro ${id} deletado com sucesso!`);
//  })

// function buscaLivro(id) {
//  return livros.findIndex(livro => livro.id == id) 
// }

