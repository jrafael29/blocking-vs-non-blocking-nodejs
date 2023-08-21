const UserModel = require('../model/user')
var eventsCount = 0;

// exemplo de methodo para inserção no banco.
function storeUser(data, cb) {
  setTimeout(() => {
    eventsCount++;
    try{
      const user = new UserModel({
        nome: `${data.nome || "Test"}-${eventsCount}`,
      })
      user.save().then((obj) => console.log("***** usuario CRIADO !!!", obj));
      return cb(null, true) ;
    }catch(error){
      console.log("erro ao criar usuario", error.stack)
    }
    
  }, 2000);
}

// exemplo que metodo que vai chamada o metodo de inserção no banco.
const createUser = (data) => {
  return new Promise((resolve, reject) => {
    storeUser(data, (error, result) => {
        if(error){
            return reject(error);
        }
        return resolve(result);
    });
  });
};

module.exports = {
  createUser,
};
