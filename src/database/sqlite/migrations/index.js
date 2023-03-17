//importando nossa conexao 
const sqliteConnection = require('../../sqlite');
const createUsers = require('./createUsers');

async function migrationsRun(){
    //schemas eu me refiro as tabelas que o meu banco vai ter 
        const schemas = [
            createUsers
        ].join('');
    
        sqliteConnection()
        .then(db => db.exec(schemas))
        .catch(error => console.error(error));
    }
    
    module.exports = migrationsRun;