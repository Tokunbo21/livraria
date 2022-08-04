import app from './src/app.js'

const port = process.env.PORT || 3000;


app.listen(port, ()=>{
    console.log(`Sevidor escutando na porta em http://localhost:${port}`)
})