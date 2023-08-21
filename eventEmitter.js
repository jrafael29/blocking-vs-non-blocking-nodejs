const EventEmitter = require('node:events');
const meuEmitter = new EventEmitter();
const {createUser} = require('./async/index')


meuEmitter.on("user.created", (data) => {
    setTimeout( async () => {
        console.log(" NEW EVENT user.created !!", data);
        await createUser({nome: data.nome})
    }, 2000 )
})


module.exports = meuEmitter