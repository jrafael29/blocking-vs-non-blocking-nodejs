const express = require('express')
const app = express();
const EventEmitter = require('./eventEmitter');
const {createUser} = require('./async/index')
app.use(express.json());

// rota exemplo para inserir usuario
app.post("/user", async function(req, res){
    if(req.body == undefined){
        return res.json({
            error: "parametros inválidos",
            statusCode: 400
        }).end();
    }
    // a linha abaixo faz com que a requisição seja não-bloqueante.
    // ou seja, o usuario recebe o retorno instantaneamente, e a operação acontece por baixo dos panos.
    EventEmitter.emit("user.created", {
        nome: req.body.nome
    })

    // a linha abaixo faz com que a requisição seja bloqueante.
    // ou seja, só é retornado para o usuario, quando a operação for concluida.
    // await createUser();

    return res.json({
        message: "YEAAHH!! seu usuario foi criado ;)",
        statusCode: 200
    }).end();
} )

app.listen(4002, _ => console.log("rodando na 4002"));